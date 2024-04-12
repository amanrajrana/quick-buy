import { useState } from "react";
import CartContext from "./cartContext";
import PropTypes from "prop-types";

const CartState = ({ children }) => {
  const [cart, setCart] = useState([
    {
      productId: 1,
      quantity: 4,
    },
    {
      productId: 2,
      quantity: 1,
    },
    {
      productId: 4,
      quantity: 6,
    },
    {
      productId: 6,
      quantity: 6,
    },
    {
      productId: 9,
      quantity: 6,
    },
  ]);
  const [totalPrice, setTotalPrice] = useState(0);

  const setQuantity = (productId, quantity) => {
    // If the quantity is 0, remove the product from the cart
    console.log(productId);
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart(
      cart.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      )
    );
  };

  const addToCart = (productId) => {
    setCart([...cart, { productId, quantity: 1 }]);
  };

  const removeFromCart = (productId) => {
    console.log("Remove From Cart", productId);
    setCart(cart.filter((item) => item.productId !== productId));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        setQuantity,
        removeFromCart,
        totalPrice,
        setTotalPrice,
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
