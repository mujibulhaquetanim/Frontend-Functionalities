import { useState } from "react";
import Nav from "./components/custom/Nav";
// import './App.css'

function App() {
  const [First, setFirst] = useState("general");

  return (
    <>
      <Nav value={First} setValue={setFirst} />
    </>
  );
}

export default App;
