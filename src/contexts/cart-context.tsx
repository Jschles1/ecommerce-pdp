"use client";

import { createContext } from "react";

export interface CartItem {
  name: string;
  quantity: number;
}

export interface CartContextValue {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<any>>;
}

export const CartContext = createContext<CartContextValue>({
  cart: [],
  setCart: () => {},
});
