import { useState, useRef, MouseEvent } from "react";
import defaultImage from "../../../assets/avatar.jpg";

function ImageUploadNew() {
  const [image, setImage] = useState(defaultImage);
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [status, setStatus] = useState<boolean>(false);
  const [showOverlay, setShowOverlay] = useState(false);

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
    <div className="h-screen flex justify-center items-center">
      <div
        onMouseEnter={() => setShowOverlay(true)}
        onMouseLeave={() => setShowOverlay(false)}
      >
        <div className="relative h-80 w-80 m-8">
          <button onClick={handleImageUpload}>
            <div className="hover:scale-110 hover:blur-sm">
              <img
                src={image}
                alt="Avatar"
                className="h-72 w-72 p-2 rounded-full"
              />
            </div>
          </button>
          <form id="form" encType="multipart/form-data">
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
        {showOverlay && (
          <button
            className="relative bottom-56 left-20 font-bold text-2xl text-white hover:backdrop-blur-lg"
            onClick={handleImageUpload}
          >
            Upload your Image
          </button>
        )}
      </div>
    </div>
  );
}

export default ImageUploadNew;
