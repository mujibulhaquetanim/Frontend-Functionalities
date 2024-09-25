"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";

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
  return (
    <div className="m-3 border-2 p-3 rounded-2xl transition-all hover:scale-105 shadow-lg animate-fadeIn">
      <div className="mb-1">
        <Image className="object-cover aspect-video rounded-md" src={foodImage} alt={foodName} />
      </div>
      <div className="space-y-1">
      <h1><span className="font-bold text-tomato">{foodName}</span></h1>
        <p className="line-clamp-1 text-grayish"><span className=""></span> {description}</p>
        <p className="flex gap-3"><span className="underline-offset-4 underline">Price:</span><span className="text-tomato font-bold">${foodPrice}</span></p>
        <p className="flex gap-3"><span className="underline underline-offset-4">Category:</span> <span className="font-bold text-red-900">{category}</span></p>
      </div>
    </div>
  );
}
