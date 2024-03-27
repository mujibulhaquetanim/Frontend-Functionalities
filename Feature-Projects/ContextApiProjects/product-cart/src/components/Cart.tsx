import { createContext } from "react";

const CartContext = createContext(null);

export default function cartProvider(props) {
  return <CartContext.Provider value={null}>{props.children}</CartContext.Provider>;
}
