import { Cart } from "@/types/type";
import { Dispatch, createContext } from "react";

type CartContextType = {
  cart: Cart[];
  setCart: Dispatch<Cart[]>;
  isFirstLoad: boolean;
  setIsFirstLoad: (isFirstLoad: boolean) => void;
  setQuantity: (id: number, quantity: number) => void;
  addToCart: (product: any) => void;
  removeFromCart: (id: number) => void;
};

const CartContext = createContext<CartContextType>({
  cart: [],
  setCart: () => {},
  isFirstLoad: true,
  setIsFirstLoad: () => {},
  setQuantity: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
});

export default CartContext;
