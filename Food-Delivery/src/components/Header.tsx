import React from "react";

export default function Header() {
  return (
    <header className="bg-[url('/foodCollectionEid.jpg')] mt-1 bg-center bg-cover h-[44vh] md:h-[34vw] relative rounded-b-2xl">
      <div className="overflow-hidden absolute gap-1 bg-black/50 md:bg-black/30 shadow-2xl w-[90%] sm:w-[50%] text-white p-2 md:p-5 flex flex-col items-start bottom-[5%] left-[2%] rounded-xl animate-fadeIn">
        <h2 className="font-bold text-[clamp(2rem,4vw,5rem)] tracking-wider leading-none">
          Order your favorite food here
        </h2>
        <p className="text-[clamp(12px,1.2vw,2rem)] leading-tight text-justify w-[80%] md:w-full text-whitish">
          Choose from a wide variety of foods and be ready in 30 minutes
        </p>
        <button className="border-none bg-white rounded-full text-ashish px-2 lg:px-4 lg:py-2 mt-1 text-[clamp(12px,1vw,1.5rem)] hover:scale-95">
          View Menu
        </button>
      </div>
    </header>
  );
}
