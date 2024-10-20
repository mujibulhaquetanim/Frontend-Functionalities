"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

interface FoodItemProps {
  foodName: string;
  foodImage: StaticImageData;
  foodPrice: number;
  description: string;
  category: string;
}

export default function FoodItem({
  foodName,
  foodImage,
  foodPrice,
  description,
  category,
}: FoodItemProps) {
  const [itemCount, setItemCount] = useState(0);
  return (
    <div className="m-3 rounded-2xl transition-all shadow-lg animate-fadeIn">
      <div className="mb-1 relative">
        <Image
          className="object-cover aspect-video rounded-md"
          src={foodImage}
          alt={foodName}
        />

        {!itemCount ? (
          <button
            className="w-7 rounded-full border-2 absolute bottom-2 right-2 bg-whitish"
            onClick={() => setItemCount((prev) => prev + 1)}
          >
            ➕
          </button>
        ) : (
          <div className="absolute bottom-2 right-2 bg-whitish rounded-2xl text-xs">
            <button
              className="w-7 h-7 rounded-full border-2 bg-red-700"
              onClick={() => setItemCount((prev) => prev - 1)}
            >
              ➖
            </button>
            <span className="font-bold m-2 text-lg">{itemCount}</span>
            <button
              className="w-7 h-7 rounded-full border-2 bg-green-900"
              onClick={() => setItemCount((prev) => prev + 1)}
            >
              ➕
            </button>
          </div>
        )}
      </div>

      <div className="space-y-1 pl-4 pb-3">
        <h1>
          <span className="font-bold text-xl text-tomato">{foodName}</span>
        </h1>
        <p className="line-clamp-1 text-grayish">
          <span className=""></span> {description}
        </p>
        <p className="flex gap-3">
          <span className="underline-offset-4 underline">Price:</span>
          <span className="text-tomato font-bold">${foodPrice}</span>
        </p>
        <p className="flex gap-3">
          <span className="underline underline-offset-4">Category:</span>{" "}
          <span className="font-bold text-red-900">{category}</span>
        </p>
      </div>
    </div>
  );
}
