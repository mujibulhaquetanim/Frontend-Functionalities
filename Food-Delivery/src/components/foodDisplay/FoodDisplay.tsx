import React from "react";
import { food_list } from "../../../public/assets";
import { StaticImageData } from "next/image";
import { useStoreContext } from "@/context/StoreContext";
import FoodItem from "./FoodItem";

export default function FoodDisplay({
  selectedMenu,
}: {
  selectedMenu: string;
}) {
  const { menu_list } = useStoreContext();
  return (
    <div>
      <h2>Top Picks nearby</h2>
      <div>
        {food_list.map((item, index) => {
          return (
            <div key={index}>
              {item.items.map((food, index) => {
                return (
                  <FoodItem
                    key={index}
                    foodName={food.foodName}
                    foodImage={food.foodImage}
                    foodPrice={food.foodPrice}
                    description={food.description}
                    category={food.category}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
