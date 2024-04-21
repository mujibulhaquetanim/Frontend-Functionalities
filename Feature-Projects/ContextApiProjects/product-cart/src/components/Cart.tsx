import { createContext, useState, useContext } from "react";

const CartContext = createContext({});

export const useCart = () => {
  const cart = useContext(CartContext);
  return cart;
};

export default function CartProvider(props: { children: React.ReactNode }) {
  const [items, setItems] = useState([]);
  return (
    <CartContext.Provider value={{ items, setItems }}>
      {props.children}
    </CartContext.Provider>
  );
}
