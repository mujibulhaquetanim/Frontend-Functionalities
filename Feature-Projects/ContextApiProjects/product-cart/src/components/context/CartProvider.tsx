import { createContext, useState } from "react";

interface Item {
  name: string;
  price: number;
}

interface Cart {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

const CartContext = createContext<Cart | null>(null);

export const CartProvider = (props: { children: React.ReactNode }) => {
  const [items, setItems] = useState<Item[]>([]);
  return (
    <CartContext.Provider value={{ items, setItems }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;