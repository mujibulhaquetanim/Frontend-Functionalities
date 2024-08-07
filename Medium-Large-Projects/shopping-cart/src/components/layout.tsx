import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import CartTab from "./Cart";

const Layout: React.FC = function layout() {
  return (
    <div>
      <main>
        <Header />
        <Outlet />
      </main>
      <CartTab />
    </div>
  );
};

export default Layout;
