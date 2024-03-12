import { useState } from "react";
import defaultImage from "../assets/avatar.jpg";

function ImageUpload() {
  const [image, setImage] = useState(defaultImage);
  return (
    <div className="relative h-72 w-72 m-8">
      <img
        src={defaultImage}
        alt="Avatar"
        className="h-72 w-72 p-2 rounded-full"
      />
    </div>
  );
}

export default ImageUpload;
