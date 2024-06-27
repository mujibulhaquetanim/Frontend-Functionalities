import { useCart } from "./context/useCart";

interface ItemsProps {
  name: string;
  price: number;
}

export default function Items({ name, price }: ItemsProps) {
  const cart = useCart();
  console.log(cart);

  const handleAddToCart = () => {
    if (cart && cart.items) {
      cart.setItems([...cart.items, { name, price }]);
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        border: "1px solid white",
        borderRadius: "1rem",
        margin: "0.5rem",
        padding: "1rem",
      }}
    >
      <h4>{name}</h4>
      <p>{`Price: ${price}`}</p>
      <button onClick={handleAddToCart} disabled={!cart || !cart.items}>
        Add to Cart
      </button>
    </div>
  );
}
