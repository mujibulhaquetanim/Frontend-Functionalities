import { Outlet, useLocation } from "react-router";
import NavBar from "./components/NavBar";

function App() {
  const location = useLocation();
  const homePage = location.pathname === "/";
  return (
    <div className="grid min-h-screen bg-slate-700">
      <div className="md:grid md:grid-cols-12">
        {!homePage && (
          <div className="hidden md:grid md:col-span-1">
            <NavBar />
          </div>
        )}

        <div
          className={`${
            homePage ? "col-span-12" : "col-span-10"
          } grid col-span-11`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
