"use client";
import ExploreMenu from "@/components/ExploreMenu";
import Header from "@/components/Header";
import { useState } from "react";

export default function Home() {
  const [selectedMenu, setSelectedMenu] = useState("All");
  return (
    <main className="space-y-3">
      <Header />
      <ExploreMenu
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
      />
    </main>
  );
}
