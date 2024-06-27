import { useCart } from "./context/useCart";

function CartItems() {
  const cart = useCart();
  const items = cart?.items ?? [];
  const total = items.reduce((a, b) => a + b.price, 0);

  return (
    <div
      style={{
        textAlign: "center",
        border: "1px solid white",
        margin: "2rem",
        padding: "5px",
      }}
    >
      <h3 style={{ textDecoration: "underline", color: "ivory" }}>
        Your Cart:
      </h3>
      {items.length > 0 ? (
        <ul>
          {items.map((item, index) => (
            <li key={index} style={{ listStyleType: "none" }}>
              {item.name} - {item.price}
            </li>
          ))}
        </ul>
      ) : (
        <h3>Cart is Empty</h3>
      )}
      {items.length > 0 && <h3>Total: {total}</h3>}
    </div>
  );
}

export default CartItems;
