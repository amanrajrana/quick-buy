import { CartItem } from "@/types/type";

//* Add product to cart
export const handleAddProductToCart = (cart: CartItem[], id: number) => {
  console.log("from handleAddProductToCart");
  const getProduct = cart.find((item) => item.id === id);

  if (getProduct) {
    return cart.map((item) =>
      item.id === id ? { id, quantity: getProduct.quantity + 1 } : item
    );
  }

  cart.push({ id, quantity: 1 });

  return cart;
};

//* Remove product from cart
export const handleRemoveProductFromCart = (cart: CartItem[], id: number) => {
  return cart.filter((item) => item.id !== id);
};

//* Increment product quantity by 1
export const handleIncrementQuantity = (cart: CartItem[], id: number) => {
  return cart.map((item) =>
    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  );
};

//* Decrement product quantity by 1
export const handleDecrementQuantity = (cart: CartItem[], id: number) => {
  return cart.map((item) =>
    item.id === id ? preventQuantityLessThanOne(item) : item
  );
};

//* function to prevent the quantity of a product from being less than 1
const preventQuantityLessThanOne = (cart: CartItem) => {
  if (cart.quantity > 1) {
    return { ...cart, quantity: cart.quantity - 1 };
  }

  return cart;
};
