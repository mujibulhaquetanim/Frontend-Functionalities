import { Outlet } from "react-router-dom";
import Sidebar from "./components/SideBar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default App;
