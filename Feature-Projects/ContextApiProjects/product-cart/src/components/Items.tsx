import { useCart } from "./context/Cart";

interface ItemsProps {
  name: string;
  price: number;
}

export default function Items({ name, price }: ItemsProps) {
  const cart = useCart();

  const handleAddToCart = () => {
    if (cart && cart.items) {
      cart.setItems([...cart.items, { name, price }]);
    }
  };

  return (
    <div className="cart-item">
      <h4>{name}</h4>
      <p>{price}</p>
      <button onClick={handleAddToCart} disabled={!cart || !cart.items}>
        Add to Cart
      </button>
    </div>
  );
}
