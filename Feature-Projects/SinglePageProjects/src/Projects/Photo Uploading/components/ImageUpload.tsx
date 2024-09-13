import { useState, useRef, MouseEvent } from "react";
import defaultImage from "../../../assets/avatar.jpg";
import edit from "../../../assets/edit.svg";

function ImageUpload() {
  const [image, setImage] = useState(defaultImage);
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [status, setStatus] = useState<boolean>(false);

  const handleImageUpload = function (event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    fileRef.current?.click();
  };
  const UploadImageDisplay = function () {
    const fileUpload = fileRef.current?.files?.[0];

    const cachedURL = URL.createObjectURL(fileUpload!);
    setImage(cachedURL);
    setStatus(true);
  };

  return (
    <div className="h-screen flex items-center justify-around">
      <div className="relative h-80 w-80 m-8">
        <img src={image} alt="Avatar" className="h-72 w-72 p-2 rounded-full" />
        <form id="form" encType="multipart/form-data">
          <button
            className="flex absolute bottom-8 right-12 top-40 rounded-full"
            onClick={handleImageUpload}
          >
            <img
              src={edit}
              alt="editIcon"
              className="object-cover size-8 font-bold hover:scale-125"
            />
          </button>
          <input
            type="file"
            id="file"
            ref={fileRef}
            onChange={UploadImageDisplay}
            hidden
          />
        </form>

        {status === true ? (
          <div className="font-bold text-xl justify-center flex mt-3">
            Photo Updated 🥂
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default ImageUpload;
