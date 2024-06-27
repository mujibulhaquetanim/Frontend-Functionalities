import { useContext } from "react";
import CartContext from "./CartProvider"; // Adjust the path as needed

export const useCart = () => {
  const cart = useContext(CartContext);
  if (!cart) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return cart;
};
