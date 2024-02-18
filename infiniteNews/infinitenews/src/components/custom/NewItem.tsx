import React from "react";

export default function NewItem() {
  return (
    <div className="border-2 w-1/6 m-3 p-3 justify-center rounded-xl hover:scale-105 duration-300">
      <div className="mb-1">
        <img src="" alt="news pic" />
      </div>
      <h1 className="font-bold text-2xl">Heading</h1>
      <div className="justify-end">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
        necessitatibus.
      </div>
      <button className="p-2 rounded-md border-2 mt-3 hover:scale-90">Read More</button>
    </div>
  );
}
