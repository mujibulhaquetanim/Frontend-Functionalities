import { createContext, useState, useContext } from "react";

interface items {
  name: string;
  price: number;
}

interface cart {
  items: items[];
  setItems: React.Dispatch<React.SetStateAction<items[]>>;
}

const CartContext = createContext<cart | null>(null);

export const useCart = () => {
  const cart = useContext(CartContext);
  return cart;
};

export default function CartProvider(props: { children: React.ReactNode }) {
  const [items, setItems] = useState<items[]>([]);
  return (
    <CartContext.Provider value={{ items, setItems }}>
      {props.children}
    </CartContext.Provider>
  );
}
