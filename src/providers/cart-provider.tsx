"use client";

import { useState } from "react";
import { CartContext, CartContextValue } from "@/contexts/cart-context";

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState([]);
  const contextValue: CartContextValue = {
    cart,
    setCart,
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
