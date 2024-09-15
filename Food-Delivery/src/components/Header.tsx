import React from "react";

export default function Header() {
  return (
    <header className="bg-[url('/foodCollectionEid.jpg')] mt-1 bg-center bg-cover h-[34vw] relative text-lg">
      <div className="absolute bg-black/50 max-w-[50%] text-white p-5 flex flex-col items-start gap-1 bottom-5 left-5 rounded-lg fade-in">
        <h2 className="lg:text-7xl font-bold text-2xl">
          Order your favorite food here
        </h2>
        <p className="text-xs lg:text-lg">
          Choose from a wide variety of foods and be ready in 30 minutes
        </p>
        <button className="border-none bg-white rounded-full text-ashish p-1 lg:px-4 lg:py-3 text-xs lg:text-sm hover:scale-95">
          View Menu
        </button>
      </div>
    </header>
  );
}
