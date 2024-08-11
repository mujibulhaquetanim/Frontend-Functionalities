import React from 'react'
import { Folder } from "lucide-react";
import folders  from "./Files";
const Node: React.FC = () => {
  return (
    <div>
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
  )
}

export default Node