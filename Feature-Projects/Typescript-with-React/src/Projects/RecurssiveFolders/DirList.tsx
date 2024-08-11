import React from "react";
import FileSystemItem from "./FileSystemItem";

type Node = {
  name: string;
  nodes?: Node[];
};

const DirList: React.FC = () => {
  return (
    <div className="p-8 mx-auto max-w-sm">
      <FileSystemItem/>
    </div>
  );
};
export default DirList;
