import { configureStore } from "@reduxjs/toolkit";

import { cartReducer, productsReducer } from "./slices";
import { data } from "./defaultData";

const getStateFromLocalStorage = () => {
  const cart = JSON.parse(localStorage.getItem("CART") ?? "{}");
  const totalAmount = +(localStorage.getItem("TOTAL_AMOUNT") || 0);
  const totalPrice = +(localStorage.getItem("TOTAL_PRICE") || 0);
  const cartState = {
    cart,
    totalAmount,
    totalPrice,
  };

  return { cart: cartState, products: { products: data } };
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
  preloadedState: getStateFromLocalStorage(),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
