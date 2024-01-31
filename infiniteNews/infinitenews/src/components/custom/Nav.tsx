import React from "react";

interface category {
  value: string;
  setValue: (newValue: string) => void;
}

const Nav: React.FC<category> = ({ value, setValue }) => {
  const arr = ["bd", "ind", "pk", "usa"];
  console.log(value);

  return (
    <div className="flex text-2xl font-bold w-full bg-green-950 text-white rounded-sm p-1">
      <div className="sticky justify-start w-[10%]">
        <div className="bg-red-700 font-bold rounded-lg p-3 hover:animate-bounce hover:cursor-pointer inline-block">
          {" "}
          <span className="text-3xl">♾️</span>News{" "}
        </div>
      </div>

      <div className="flex justify-evenly w-[90%]">
        {arr.map((item, index) => {
          return (
            <div
              className="border-2 rounded-lg p-2 hover:bg-red-800"
              key={index}
              onClick={() => setValue(item)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
