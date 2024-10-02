import React, { useState } from "react";
import { food_list } from "../../../public/assets";
import FoodItem from "./FoodItem";

export default function FoodDisplay({
  selectedMenu,
}: {
  selectedMenu: string;
}) {
  const [visibleItems, setVisibleItems] = useState(15);

  const showMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 15);
  };

  // First, filter based on the selected category
  const filteredFoodList = food_list
    .flatMap((item) => item.items)
    .filter((food) => selectedMenu === "All" || food.category === selectedMenu);

  // check on filteredFoodList length not the whole food_list length
  const hasMoreItemsToShow = visibleItems < filteredFoodList.length;

  return (
    <div>
      <div className="flex justify-between items-center mb-1 ml-3 mr-3">
        <h2 className="text-[clamp(1.3rem,1.5vw,3rem)]">Top Picks Nearby</h2>
        <div className="ml-3 text-grayish">
          Total displayed Items:{" "}
          {Math.min(visibleItems, filteredFoodList.length)}
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
        {filteredFoodList.slice(0, visibleItems).map((food, index) => (
          <FoodItem
            key={index}
            foodName={food.foodName}
            foodImage={food.foodImage}
            foodPrice={food.foodPrice}
            description={food.description}
            category={food.category}
          />
        ))}
        {hasMoreItemsToShow && (
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
