import { Outlet, useLocation } from "react-router";
import NavBar from "./components/nav-components/NavBar";
import { useEffect, useRef, useState } from "react";

interface LayoutProps {
  children?: React.ReactNode;
}

// Ignore tiny scroll jitters (trackpads, iOS rubber-banding) before toggling the nav.
const SCROLL_THRESHOLD = 8;

const Layout: React.FC<LayoutProps> = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isVisible, setIsVisible] = useState(true); // Visible by default on mobile
  const lastScrollY = useRef(0);

  // Route changes keep the previous page's scroll offset in a BrowserRouter; reset it.
  useEffect(() => {
    window.scrollTo(0, 0);
    lastScrollY.current = 0;
    setIsVisible(true);
  }, [location.pathname]);

  useEffect(() => {
    let frame = 0;

    const handleScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const currentScrollY = Math.max(window.scrollY, 0);
        const delta = currentScrollY - lastScrollY.current;
        const atBottom =
          window.innerHeight + currentScrollY >=
          document.documentElement.scrollHeight - 2;

        if (currentScrollY < 24 || atBottom) {
          // Always reachable at the very top and bottom of the page
          setIsVisible(true);
        } else if (Math.abs(delta) > SCROLL_THRESHOLD) {
          setIsVisible(delta < 0); // Scrolling up → show, down → hide
        } else {
          return;
        }

        lastScrollY.current = currentScrollY;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-page">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-slate-800"
      >
        Skip to content
      </a>

      {/* Main container */}
      <div className="flex relative">
        {/* NavBar for larger screens (always visible) */}
        {!isHomePage && (
          <div className="hidden md:block fixed top-0 left-0 h-screen w-16 md:w-24 z-40">
            <NavBar layoutGroup="desktop" />
          </div>
        )}

        {/* Main content with conditional padding */}
        <main
          id="main-content"
          tabIndex={-1}
          className={`flex-1 min-w-0 outline-none ${
            !isHomePage ? "pb-24 md:pb-0 md:pl-24" : ""
          }`}
        >
          <Outlet />
        </main>

        {/* NavBar for smaller screens (visible by default, hides on scroll down) */}
        {!isHomePage && (
          <div
            className={`md:hidden z-50 fixed bottom-0 left-0 right-0 w-full pb-[max(0.75rem,env(safe-area-inset-bottom))] transition-transform duration-300 ease-out-expo ${
              isVisible ? "translate-y-0" : "translate-y-[120%]"
            }`}
          >
            <NavBar layoutGroup="mobile" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Layout;
