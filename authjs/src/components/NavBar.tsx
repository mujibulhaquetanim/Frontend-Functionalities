// "use client";
// import { useSession } from "next-auth/react";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
// import { auth } from "../../auth";
import { getSession } from "@/lib/getSession";
import { handleSignOut } from "@/app/actions/authActions";

export default async function NavBar() {
  // it is used when we are using client component
  // const { data: session } = useSession();

  // it is used when we are using server component
  //const session = await auth();
  // console.log(session);

  // it is used when we are using server component but we are using custom hook which is used to get the session and keep it in the cache.
  const session = await getSession();
  console.log({session}); //for debugging purpose it was used to show the session value in the console.
  return (
    <nav className="flex justify-between items-center py-3 px-4 bg-white shadow-md">
      <Link href={"/"}>
        <h1 className="text-2xl font-bold">AuthJS</h1>
      </Link>

      <Link href={"/admin"}>
        <Button variant="default">Admin</Button>
      </Link>

      {!session ? (
        <Link href="/auth/signin">
          <Button variant="default">Sign In</Button>
        </Link>
      ) : (
        <form action={handleSignOut}>
          <Button variant="default" type="submit">
            Sign Out
          </Button>
        </form>
      )}
    </nav>
  );
}
