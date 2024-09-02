import { Folder } from "lucide-react";

type Node = {
  name: string;
  nodes?: Node[];
};


const FileSystemItem = ({ nodes }: { nodes: Node[]}) => {
  return (
    <div>
              <ul>
        <li className="my-1.5">
          <span className="flex items-center gap-1.5">
            <Folder />
            {folders}
          </span>

          <ul className="pl-6">
            {folders.map((folder, index) => (
              <li className="my-1.5" key={index}>
                <span className="flex items-center gap-1.5">
                  <Folder />
                  {folder.name}
                </span>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default FileSystemItem