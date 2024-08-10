import React from "react";
import { Folder } from "lucide-react";

const folders = ["Movies", "Books", "Music"];

const DirList: React.FC = () => {
  return (
    <div className="p-8 mx-auto max-w-sm">
      <ul>
        <li className="my-1.5">
          <span className="flex items-center gap-1.5">
            <Folder />
            Home
          </span>

          <ul className="pl-6">
            {folders.map((folder, index) => (
              <li className="my-1.5" key={index}>
                <span className="flex items-center gap-1.5">
                  <Folder />
                  {folder}
                </span>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};
export default DirList;
