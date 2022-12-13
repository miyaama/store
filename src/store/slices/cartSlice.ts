import { createSlice } from "@reduxjs/toolkit";

import { CART, TOTAL_AMOUNT, TOTAL_PRICE } from "../../shared/constans";
import { ProductType } from "./productsSlice";

export type CartProduct = ProductType & { amount: number };

export interface CartState {
  cart: Record<string, CartProduct>;
  totalAmount: number;
  totalPrice: number;
}

const setStateToLocalStorage = (state: CartState) => {
  localStorage.setItem(CART, JSON.stringify({ ...state.cart }));
  localStorage.setItem(TOTAL_AMOUNT, JSON.stringify(state.totalAmount));
  localStorage.setItem(TOTAL_PRICE, JSON.stringify(state.totalPrice));
};

const initialState: CartState = {
  cart: {},
  totalAmount: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { id } = action.payload;

      const product = state.cart[id] || action.payload;
      const amount = (product.amount || 0) + 1;

      state.totalAmount += 1;
      state.totalPrice += product.price;

      state.cart = { ...state.cart, [id]: { ...product, amount } };

      setStateToLocalStorage(state);
    },
    removeItem: (state, action) => {
      const { id } = action.payload;

      state.cart[id].amount -= 1;
      state.totalAmount -= 1;
      state.totalPrice -= state.cart[id].price;

      if (!state.cart[id].amount) {
        delete state.cart[id];
      }

      setStateToLocalStorage(state);
    },
    deleteItem: (state, action) => {
      const { id } = action.payload;

      const product = state.cart[id];

      const totalProductPrice = product.amount * product.price;

      state.totalAmount -= product.amount;
      state.totalPrice -= totalProductPrice;

      delete state.cart[id];

      setStateToLocalStorage(state);
    },
  },
});

export const { removeItem, addItem, deleteItem } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
