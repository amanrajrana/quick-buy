import { useEffect, useState } from "react";
import CartContext from "./cartContext";
import PropTypes from "prop-types";

const CartState = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  const setQuantity = (id, quantity) => {
    // If the quantity is 0, remove the product from the cart
    console.log(id);
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }

    setCart(
      cart?.map((product) =>
        product.id === id ? { ...product, quantity } : product
      )
    );
  };

  const addToCart = (product) => {
    if (!product) return;

    const getProduct = cart.find((item) => item.id === product.id);

    if (getProduct) {
      setCart(
        cart?.map((item) =>
          item.id === product.id
            ? { ...product, quantity: getProduct.quantity + 1 }
            : item
        )
      );

      return;
    }

    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  useEffect(() => {
    if (isFirstLoad) return;
    localStorage.setItem("cart", JSON.stringify(cart));
    setIsFirstLoad(false);
  }, [cart, isFirstLoad]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    console.log(cart);

    if (!cart) return;

    console.log("hey this is cart", cart);
    setCart(JSON.parse(cart));
    setIsFirstLoad(false);
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        setQuantity,
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
