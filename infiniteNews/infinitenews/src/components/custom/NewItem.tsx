import React from "react";

interface value{
  article: string;
  title: string;
  page: string;
}

const NewItem:React.FC<value>=({article,page,title})=> {
  return (
    <div className="border-2 w-1/6 m-3 p-3 rounded-xl hover:scale-105 duration-300">
      <div className="mb-1">
        <img src="" alt="news pic" />
      </div>
      <h1 className="font-bold text-2xl">Heading</h1>
      <div className="justify-end mt-1">
        {article}
      </div>
      <button className="p-2 rounded-md border-2 mt-3 hover:scale-90">
        Read More
      </button>
    </div>
  );
}

export default NewItem;
