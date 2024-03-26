import DragNdropUpload from "./components/ImageUpload/DragNdropUpload";
import ImageUpload from "./components/ImageUpload/ImageUpload";
import ImageUploadNew from "./components/ImageUpload/ImageUploadNew";
function App() {
  return (
    <div>
      <ImageUpload />
      <ImageUploadNew />
      <DragNdropUpload/>
    </div>
  );
}

export default App;
