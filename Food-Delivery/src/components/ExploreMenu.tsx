"use client";
import React, { useState } from "react";
import { menu_list } from "../../public/assets";
import Image from "next/image";

export default function ExploreMenu() {
  return (
    <div className="grid place-content-center gap-3 p-1 text-justify">
      <h1 className="text-3xl font-bold mt-3 text-grayishBlack">
        Explore Our Menu
      </h1>
      <p className="text-lg max-w-[60%] text-grayish">
        Choose from our broad selection of dishes and cuisines. It&apos;s our
        mission to satisfy everyone&apos;s taste.
      </p>

      <div className="hide-scrollbar grid grid-flow-col place-content-between gap-5 overflow-x-scroll p-3">
        {menu_list.map((item, index) => {
          return (
            <div
              key={index}
              className="w-36 cursor-pointer text-center space-y-2"
              role="button"
            >
              <Image
                className={`rounded-full object-cover h-36 transition duration-300 `}
                src={item.menu_image}
                alt={item.menu_name}
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
