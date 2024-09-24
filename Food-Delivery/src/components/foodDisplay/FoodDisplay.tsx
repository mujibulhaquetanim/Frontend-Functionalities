import React from "react";
import { food_list } from "../../../public/assets";
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
      <h2 className="text-[clamp(1.3rem,1.5vw,3rem)] mb-4 ml-3">
        Top Picks Nearby
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
        {food_list.map((item, index) => (
          //read note below about flatmap/react.fragment
          <React.Fragment key={index}>
            {item.items.map((food, foodIndex) => (
              <div key={foodIndex} className="p-2">
                <FoodItem
                  foodName={food.foodName}
                  foodImage={food.foodImage}
                  foodPrice={food.foodPrice}
                  description={food.description}
                  category={food.category}
                />
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

/*
          ## as using grid-cols would render column wise and leads to empty space, we use react fragment so that it doesn't create extra divs when rendering which leaves extra space in the dom. To avoid unnecessary wrappers in layouts like Flexbox or Grid we use react fragment.
          
          ## other way is, using flatmap to flatten the array (nested array inside of another object, food_list) of objects before mapping over it. i.e. allFoodItems= food_list.flatMap((item) => item.items) and then map over it. i.e. allFoodItems.map((food) => <FoodItem foodName={food.foodName} foodImage={food.foodImage} foodPrice={food.foodPrice} description={food.description} category={food.category} />)

          note: this was a great learning experience as it helped me understand how flatmap can be used in react.
          */
