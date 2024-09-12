"use client";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useSession } from "next-auth/react";

export default function NavBar() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <nav className="flex justify-between items-center py-3 px-4 bg-white shadow-md">
      <Link href={"/"}>
        <h1 className="text-2xl font-bold">AuthJS</h1>
      </Link>

      {!session ? (
        <Link href="/auth/signin">
          <Button variant="default">Sign In</Button>
        </Link>
      ) : (
        <form>
          <Button variant="default" type="submit">
            Sign Out
          </Button>
        </form>
      )}
    </nav>
  );
}
