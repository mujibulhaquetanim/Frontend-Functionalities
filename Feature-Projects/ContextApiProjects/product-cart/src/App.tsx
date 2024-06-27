import Items from "./components/Items";
import "./App.css";
import CartItems from "./components/CartItems";
function App() {
  return (
    <>
      <h1>Welcome to Aat-Baazar</h1>
      <div style={{display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap"}}>
        <Items name={"McBook Pro"} price={1200} />
        <Items name={"Ipad"} price={800} />
        <Items name={"Iphone"} price={1000} />
      </div>
      <CartItems />
    </>
  );
}

export default App;
