"use client";
import React, { useState } from "react";

export default function NavBar() {
  const [menu, setmenu] = useState("home");
  return (
    <nav className="flex justify-between items-center py-3 px-4 shadow-md">
      <h1 className="text-2xl font-bold text-tomato">YumDispatch</h1>
      <ul className="flex gap-5">
        <li
          onClick={() => setmenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => setmenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </li>
        <li
          onClick={() => setmenu("about")}
          className={menu === "about" ? "active" : ""}
        >
          About
        </li>
        <li
          onClick={() => setmenu("contact")}
          className={menu === "contact" ? "active" : ""}
        >
          Contact
        </li>
      </ul>
      <div className="flex flex-between gap-5 hover:cursor-pointer">
        <div className="flex gap-5 text-2xl font-bold relative">
          <h1>🔎</h1>
          <h1>🛒</h1>
          <p className="absolute right-0 top-0 min-w-3 min-h-3 rounded-full bg-tomato"></p>
        </div>
        <button className="bg-transparent border hover:bg-whitish border-tomato px-4 py-1 rounded-3xl duration-500">
          Sign In
        </button>
      </div>
    </nav>
  );
}
