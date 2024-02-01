import React from "react";
import {NavLink} from "react-router-dom";

interface category {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Nav: React.FC<category> = ({ value, setValue }) => {
  const arr = [
    "General",
    "Business",
    "Entertainment",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];
  console.log(value);

  return (
    <div className="flex text-2xl font-bold w-full bg-green-950 text-white rounded-sm p-1">
      <div className="sticky justify-start w-[10%]">
        <NavLink to={`/General`} className="bg-red-700 font-bold rounded-lg p-3 transition duration-150 ease-out hover:ease-in  inline-block">
          {" "}
          <span className="text-3xl">♾️</span>News{" "}
        </NavLink>
      </div>

      <div className="flex justify-between w-[90%]">
        {arr.map((item, index) => {
          return (
            <NavLink
              to={`/${item}`}
              key={index}
              className={(isActive)=>isActive?'bg-green-900':'bg-red-800'}
              onClick={() => setValue(item)}
            >
              {item}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
