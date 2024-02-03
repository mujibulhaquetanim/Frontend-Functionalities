import React from "react";
import { NavLink, Outlet } from "react-router-dom";

interface category {
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Nav: React.FC<category> = ({setValue }) => {

  const category:string[] = [
    "General",
    "Business",
    "Entertainment",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];

  return (
    <div className="flex">
      <NavLink
          to={`/General`}
          className="bg-red-700 text-2xl p-2 items-center justify-center font-bold sticky"
        >
          {" "}
          <span className="text-3xl">♾️</span>News{" "}
        </NavLink>


      <div className="flex text-xl font-bold w-full bg-green-950 text-white">
      <div className="">
        
      </div>

      <div className="flex items-center justify-around w-full">
        {category.map((item, index) => {
          return (
            <NavLink
              to={`/${item}`}
              key={index}
              className={({isActive}) => {
                return isActive ? "underline justify-center items-center rounded-lg p-2 transition duration-300 ease-out hover:ease-in bg-slate-500" : "";
              }}
              onClick={() => setValue(item)}
            >
              {item}
            </NavLink>
          );
        })}
      </div>
      <Outlet />
    </div>
    </div>
  );
};

export default Nav;
