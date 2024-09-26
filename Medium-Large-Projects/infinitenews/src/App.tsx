import { useState } from "react";
import Nav from "./components/custom/Nav";
import NewsBoard from "./components/custom/NewsBoard";

function App() {
  const [category, setCategory] = useState("top");

  return (
    <>
      <Nav setValue={setCategory} />
      <NewsBoard category={category} ioSuccess="success"/>
    </>
  );
}

export default App;
