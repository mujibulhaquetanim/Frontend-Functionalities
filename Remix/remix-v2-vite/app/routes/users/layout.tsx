import { Outlet } from "@remix-run/react";
import React from "react";

export default function layout() {
  return (
    <div>
      <nav className="flex w-full h-12 bg-slate-300 drop-shadow-sm">
        <ul className="flex gap-4 items-center justify-center w-full">
          <li>
            <a href="/users">Users</a>
          </li>
          <li>
            <a href="/users/4">New User</a>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
