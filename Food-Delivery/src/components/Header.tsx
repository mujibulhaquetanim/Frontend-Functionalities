import React from "react";

export default function Header() {
  return (
    <header className="bg-[url('/foodCollectionEid.jpg')] bg-cover h-[34vw] relative">
      <div className="absolute bg-black/30 text-white p-5 flex flex-col items-start gap-1">
        <h2>Order your favorite food here</h2>
        <p>Choose from a wide variety of foods and be ready in 30 minutes</p>
        <button className="">Order Now</button>
      </div>
    </header>
  );
}
