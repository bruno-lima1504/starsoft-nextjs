import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const productIsAlreadyInCart = state.cart.some(
        (product) => product.id === action.payload.id,
      );
      if (productIsAlreadyInCart) {
        state.cart = state.cart.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product,
        );
        state.totalPrice = state.cart.reduce(
          (total, product) => total + product.price * product.quantity,
          0,
        );
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      state.totalPrice = state.cart.reduce(
        (total, product) => total + product.price * product.quantity,
        0,
      );
    },
    increaseProduct: (state, action) => {
      state.cart = state.cart.map((product) =>
        product.id === action.payload
          ? { ...product, quantity: product.quantity + 1 }
          : product,
      );
      state.totalPrice = state.cart.reduce(
        (total, product) => total + product.price * product.quantity,
        0,
      );
    },
    decreaseProduct: (state, action) => {
      state.cart = state.cart
        .map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity - 1 }
            : product,
        )
        .filter((product) => product.quantity > 0);
      state.totalPrice = state.cart.reduce(
        (total, product) => total + product.price * product.quantity,
        0,
      );
    },
    removeProduct: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload,
      );
      state.totalPrice = state.cart.reduce(
        (total, product) => total + product.price * product.quantity,
        0,
      );
    },
  },
});

export const selectTotalQuantity = (state) =>
  state.cart.cart.reduce((total, product) => total + product.quantity, 0);

export const { addProduct, increaseProduct, decreaseProduct, removeProduct } =
  cartSlice.actions;
export default cartSlice.reducer;
