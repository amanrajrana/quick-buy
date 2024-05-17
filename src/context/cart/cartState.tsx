import { useEffect, useState } from "react";
import CartContext from "./cartContext";
import PropTypes from "prop-types";
import { Cart, Product } from "@/types/type";

type Props = {
  children: React.ReactNode;
};

const CartState = ({ children }: Props) => {
  const [cart, setCart] = useState<Cart[]>([]);
  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true);

  const setQuantity = (id: number, quantity: number) => {
    // If the quantity is 0, remove the product from the cart
    console.log(id);
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }

    setCart(
      cart?.map((product: any) =>
        product.id === id ? { ...product, quantity } : product
      )
    );
  };

  const addToCart = (product: Product) => {
    if (!product) return;

    const getProduct = cart.find((item: any) => item.id === product.id);

    if (getProduct) {
      setCart(
        cart.map((item: any) =>
          item.id === product.id
            ? { ...product, quantity: getProduct.quantity + 1 }
            : item
        )
      );

      return;
    }

    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter((item: any) => item.id !== id));
  };

  useEffect(() => {
    if (isFirstLoad) return;
    localStorage.setItem("cart", JSON.stringify(cart));
    setIsFirstLoad(false);
  }, [cart, isFirstLoad]);

  useEffect(() => {
    const data = localStorage.getItem("cart") || "[]";
    const cart = JSON.parse(data);
    console.log(cart);

    if (!cart) return;

    setCart(cart);
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        setQuantity,
        isFirstLoad,
        setIsFirstLoad,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartState;
