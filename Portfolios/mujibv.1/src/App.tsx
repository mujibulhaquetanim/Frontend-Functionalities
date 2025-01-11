import { Outlet, useLocation } from "react-router";
import NavBar from "./components/NavBar";

function App() {
  const location = useLocation();
  const homePage = location.pathname === "/";
  return (
    <div className="flex h-screen bg-slate-500">
      <div className="grid grid-cols-12 h-full w-full">
        {!homePage && (
          <div className="grid col-span-1">
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
