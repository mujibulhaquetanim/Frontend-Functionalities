import { useState, useRef } from "react";
import defaultImage from "../assets/avatar.jpg";
import edit from "../assets/edit.svg";


function ImageUpload() {
  const [image, setImage] = useState(defaultImage);
  const fileRef = useRef<HTMLInputElement | null>(null);

  const handleImageUpload = function (event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    fileRef.current?.click();
  };

  return (
    <div className="relative h-80 w-80 m-8">
      <img
        src={defaultImage}
        alt="Avatar"
        className="h-72 w-72 p-2 rounded-full"
      />
      <form id="form" encType="multipart/form-data">
        <button
          className="flex absolute bottom-8 right-12 top-40 rounded-full"
          onClick={handleImageUpload}
        >
          <img
            src={edit}
            alt="editIcon"
            className="object-cover size-8 font-bold"
          />
        </button>
        <input type="file" id="file" ref={fileRef} hidden />
      </form>
    </div>
  );
}

export default ImageUpload;
