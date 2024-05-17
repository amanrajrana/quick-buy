import { CartItem } from "@/types/type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  handleAddProductToCart,
  handleDecrementQuantity,
  handleIncrementQuantity,
  handleRemoveProductFromCart,
} from "./utils";

const initialState = {
  products: [] as CartItem[],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    //* This Reducer is used to add a product to the cart
    addToCart: (state, action: PayloadAction<number>) => {
      state.products = handleAddProductToCart(state.products, action.payload);
    },

    //* This Reducer is used to remove a product from the cart
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.products = handleRemoveProductFromCart(
        state.products,
        action.payload
      );
    },

    //* This Reducer is used to increment the quantity of a product in the cart by 1
    incrementQuantity: (state, action: PayloadAction<number>) => {
      state.products = handleIncrementQuantity(state.products, action.payload);
    },

    //* This Reducer is used to decrement the quantity of a product in the cart by 1 if the quantity is greater than 1
    decrementQuantity: (state, action: PayloadAction<number>) => {
      state.products = handleDecrementQuantity(state.products, action.payload);
    },
  },
});

export default cartSlice.reducer;
export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
