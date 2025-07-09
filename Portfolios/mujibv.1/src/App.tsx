import { Outlet, useLocation } from "react-router";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isVisible, setIsVisible] = useState(true); // Visible by default on mobile
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Show/hide NavBar based on scroll direction
      if (prevScrollPos > currentScrollPos) {
        // Scrolling up
        setIsVisible(true);
      } else {
        // Scrolling down
        setIsVisible(false);
      }

      // Update previous scroll position
      setPrevScrollPos(currentScrollPos);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div className="min-h-screen bg-slate-700">
      {/* Main container */}
      <div className="flex relative">
        {/* NavBar for larger screens (always visible) */}
        {!isHomePage && (
          <div className="hidden md:block fixed top-0 left-0 h-screen w-16 md:w-24">
            <NavBar />
          </div>
        )}

        {/* Main content with conditional padding */}
        <div className={`flex-1 ${!isHomePage ? "md:pl-16 lg:pl-24" : ""}`}>
          <Outlet />
        </div>

        {/* NavBar for smaller screens (visible by default, hides on scroll down) */}
        {!isHomePage && (
          <div
            className={`md:hidden z-50 fixed bottom-0 left-0 right-0 w-full transition-transform duration-300 ${
              isVisible ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <NavBar />
          </div>
        )}
      </div>
    </div>
  );
};

export default Layout;
