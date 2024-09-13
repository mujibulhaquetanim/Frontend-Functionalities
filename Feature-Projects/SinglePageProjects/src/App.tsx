import React from "react";
import { Outlet, Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="bg-slate-700 text-white p-3">
      <nav>
        <div className="text-xl rounded-2xl inline-block font-bold border-2 p-3 bg-slate-400 hover:bg-green-900 hover:scale-105 transform duration-300">
          <Link to="/dirlist">Recurrsive Folders</Link>
        </div>

        <div className="text-xl rounded-2xl inline-block font-bold border-2 p-3 bg-slate-400 hover:bg-green-900 hover:scale-105 transform duration-300">
          <Link to="/scrollspy">Scroll Spy</Link>
        </div>

        <div className="text-xl rounded-2xl inline-block font-bold border-2 p-3 bg-slate-400 hover:bg-green-900 hover:scale-105 transform duration-300">
          <Link to="/PhotoUploadingApp">Photo Uploading</Link>
        </div>

        <div className="text-xl rounded-2xl inline-block font-bold border-2 p-3 bg-slate-400 hover:bg-green-900 hover:scale-105 transform duration-300">
          <Link to="/test">Test</Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};
export default Header;
