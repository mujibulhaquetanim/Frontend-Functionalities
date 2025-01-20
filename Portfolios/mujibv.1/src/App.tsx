import { Outlet, useLocation } from "react-router";
import NavBar from "./components/NavBar";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="min-h-screen bg-slate-700">
      {/* Main container */}
      <div className="flex relative">
        {/* Fixed navigation */}
        {!isHomePage && (
          <div className="fixed top-0 left-0 h-screen w-16 md:w-24">
            <NavBar />
          </div>
        )}

        {/* Main content with conditional padding */}
        <div className={`flex-1 ${!isHomePage ? 'pl-16 md:pl-24' : ''}`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;