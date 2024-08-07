import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = function Header() {
  return (
    <Link to="/">
      <h1 className="text-3xl font-bold underline">Home Page</h1>
    </Link>
  );
};

export default Header;
