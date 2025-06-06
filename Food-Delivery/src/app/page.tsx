"use client";
import ExploreMenu from "@/components/ExploreMenu";
import FoodDisplay from "@/components/foodDisplay/FoodDisplay";
import Header from "@/components/Header";
import { useState } from "react";

export default function Home() {
  const [selectedMenu, setSelectedMenu] = useState("All");
  return (
    <main className="grid gap-3">
      <Header />
      <ExploreMenu
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
      />
      <FoodDisplay selectedMenu={selectedMenu} />
    </main>
  );
}
