import React from "react";

interface SubMenuProps {
  char: string;
  isActive: boolean;
}

const SubMenu: React.FC = function SubMenu({ char, isActive }) {
  return (
    <div
      className={`char ${isActive} ? "bg-red-700 text-white p-2 border-2" : ""`}
    >{char}</div>
  );
};

export default SubMenu;
