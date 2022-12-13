import { createSlice } from "@reduxjs/toolkit";
import { data } from "../defaultData";

export interface ProductType {
  id: number;
  url: string;
  price: number;
  name: string;
}

export interface ProductsState {
  products: ProductType[];
}

const initialState: ProductsState = {
  products: data,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const productsReducer = productsSlice.reducer;
