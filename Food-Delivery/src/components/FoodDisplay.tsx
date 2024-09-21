import React from "react";
import { food_list } from "../../public/assets";
import { StaticImageData } from "next/image";
import { useStoreContext } from "@/context/StoreContext";

interface foodList {
  menu_name: string;
  menu_image: StaticImageData;
  items: {
    _id: number;
    foodName: string;
    foodImage: string;
    foodPrice: number;
    description: string;
    category: string;
  }[];
}
[];
export default function FoodDisplay({
  selectedMenu,
}: {
  selectedMenu: string;
}) {
  const { menu_list } = useStoreContext();
  return (
    <div>
      <h2>Top Picks nearby</h2>
    </div>
  );
}
