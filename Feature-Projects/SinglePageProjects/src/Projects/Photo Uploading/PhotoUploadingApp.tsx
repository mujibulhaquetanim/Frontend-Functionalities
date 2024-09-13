import DragNdropUpload from "./components/DragNdropUpload";
import ImageUpload from "./components/ImageUpload";
import ImageUploadNew from "./components/ImageUploadNew";
function PhotoUploadingApp() {
  return (
    <div>
      <ImageUpload />
      <ImageUploadNew />
      <DragNdropUpload />
    </div>
  );
}

export default PhotoUploadingApp;
