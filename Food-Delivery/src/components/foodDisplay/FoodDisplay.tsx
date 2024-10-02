import React, { useState } from "react";
import { food_list } from "../../../public/assets";
import { useStoreContext } from "@/context/StoreContext";
import FoodItem from "./FoodItem";

export default function FoodDisplay({
  selectedMenu,
}: {
  selectedMenu: string;
}) {
  const { menu_list } = useStoreContext();
  const [visibleItems, setVisibleItems] = useState(15);

  const showMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 15);
  };

  const flattenedFoodList = food_list.flatMap((item) => item.items);

  return (
    <div>
      <div className="flex justify-between items-center mb-1 ml-3 mr-3">
        <h2 className="text-[clamp(1.3rem,1.5vw,3rem)]">Top Picks Nearby</h2>
        <div className="ml-3 text-grayish">
          Total displayed Items: {visibleItems}
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
        {flattenedFoodList.slice(0, visibleItems).map((food, index) => {
          {
            if (food.category === selectedMenu || selectedMenu === "All") {
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
            }
          }
        })}
        {visibleItems < flattenedFoodList.length && (
          <div className="flex items-end mb-6">
            <button
              onClick={showMoreItems}
              className="mt-4 p-2 bg-tomato text-white rounded-xl hover:scale-95"
            >
              Show More...
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

