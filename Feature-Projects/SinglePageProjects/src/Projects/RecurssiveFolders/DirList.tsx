import FileSystemItem from "./FileSystemItem";
import nodes from "./Files";

const DirList = () => {
  return (
    <div className="p-8 mx-auto max-w-sm">
      <ul>
        <FileSystemItem nodes={nodes} />
      </ul>
    </div>
  );
};
export default DirList;
