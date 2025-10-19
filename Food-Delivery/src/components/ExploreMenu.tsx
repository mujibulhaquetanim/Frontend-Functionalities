"use client";
import React, { useState } from "react";
import { menu_list } from "../../public/assets";
import Image from "next/image";

interface category {
  selectedMenu: string;
  setSelectedMenu: React.Dispatch<React.SetStateAction<string>>;
}

export default function ExploreMenu({
  selectedMenu,
  setSelectedMenu,
}: category) {
  return (
    <div className="grid place-content-center gap-1 text-justify">
      <h1 className="text-[clamp(1.7rem,2vw,3rem)] font-bold text-grayishBlack pl-2">
        Explore Our Menu
      </h1>
      <p className="text-[clamp(1rem,1vw,1.5rem)] md:w-[60%] text-grayish leading-tight tracking-wide pl-2 pr-1">
        Choose from our broad selection of dishes and cuisines. It&apos;s our
        mission to satisfy everyone&apos;s taste.
      </p>

      <div className="hide-scrollbar grid grid-flow-col place-content-between gap-5 overflow-x-scroll p-1">
        {menu_list.map((item, index) => {
          const isSelected = selectedMenu === item.menu_name;
          return (
            <div
              key={index}
              className="w-36 cursor-pointer text-center space-y-2"
              onClick={() =>
                setSelectedMenu((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              role="button"
            >
              <Image
                className={`rounded-full object-cover h-36 transition duration-300 ${
                  isSelected
                    ? "border-4 p-1 border-tomato scale-105"
                    : "border-4 border-transparent hover:scale-110"
                }`}
                src={item.menu_image}
                alt={item.menu_name}
                width={500}
                height={500}
              />
              <p className="text-[max(1.2vw,16px)] pb-1">{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr className="bg-[#e2e2e2] h-1 border-none" />
    </div>
  );
}
