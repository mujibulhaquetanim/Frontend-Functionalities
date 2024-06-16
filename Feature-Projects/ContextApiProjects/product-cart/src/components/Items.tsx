import { useCart } from "./context/Cart";
interface Items {
  name: string;
  price: number;
}
export default function Items({ name, price }: Items) {
  const cart = useCart();
  return (
    <div className="cart-item">
      <h4>{name}</h4>
      <p>{price}</p>
      <button onClick={() => cart.setItems([...cart.items])}>
        Add to Cart
      </button>
    </div>
  );
}
