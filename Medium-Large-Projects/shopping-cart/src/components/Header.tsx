import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = function Header() {
  return (
    <header className="flex justify-between items-center py-3 px-4 mb-5">
      <Link to="/">
        <h1 className="text-xl font-bold underline">Home</h1>
      </Link>
      <div className="w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center relative">
        <img src="/cart.png" className="w-6" alt="Cart" />
        <span className="absolute bottom-0 -right-1 text-sm bg-red-600 text-white w-5 h-5 rounded-full flex justify-center items-center">0</span>
      </div>
    </header>
  );
};

export default Header;
