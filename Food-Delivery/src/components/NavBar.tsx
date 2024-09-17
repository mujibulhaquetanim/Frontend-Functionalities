"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function NavBar() {
  const [menu, setmenu] = useState("home");
  return (
    <nav className="flex justify-between items-center py-3 px-4 shadow-md">
      <Link
        href={"/"}
        className="text-2xl font-bold text-tomato hover:cursor-pointer mr-2"
        onClick={() => setmenu("home")}
      >
        YumDispatch
      </Link>
      <ul className="hidden sm:flex gap-5 hover:cursor-pointer">
        <li>
          <Link
            href={"/"}
            onClick={() => setmenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href={"/menu"}
            onClick={() => setmenu("menu")}
            className={menu === "menu" ? "active" : ""}
          >
            Menu
          </Link>
        </li>
        <li>
          <Link
            href={"/about"}
            onClick={() => setmenu("about")}
            className={menu === "about" ? "active" : ""}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href={"/contact"}
            onClick={() => setmenu("contact")}
            className={menu === "contact" ? "active" : ""}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="flex items-center lg:gap-5 hover:cursor-pointer">
        <div className="flex gap-5 text-2xl font-bold relative">
          <h1>🔎</h1>
          <h1>🛒</h1>
          <p className="absolute right-0 top-0 min-w-3 min-h-3 rounded-full bg-tomato animate-pulse duration-1000"></p>
        </div>
        <button className="hidden md:block bg-transparent border hover:bg-whitish ml-3 border-tomato px-4 py-1 rounded-3xl duration-500">
          Sign In
        </button>
        <button className="cursor-pointer md:hidden rotate-90 font-bold text-2xl ml-7">
          ⫴
        </button>
      </div>
    </nav>
  );
}
