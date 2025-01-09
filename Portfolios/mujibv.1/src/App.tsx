import { Outlet } from "react-router";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="flex h-screen bg-slate-500">
      <div className="grid grid-cols-12 h-full w-full">
        <div className="grid col-span-1">
          <NavBar />
        </div>

        <div className="grid col-span-11">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
