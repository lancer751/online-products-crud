import { useContext } from "react";
import { CartContext } from "../contexts/cartContext";

export function useCart() {
  const context = useContext(CartContext);

  if (context === undefined)
    throw new Error("useCart must be within a CartProvider");

  return context;
}
