import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

import productsData from "../../../public/db/products.json";

interface Product {
  id: string;
  brand: string;
  model: string;
  price: number;
  description: string;
}

interface ProductStore {
  products: Product[];
  selectedProduct: Product;
  loading: boolean;
  error: string | null;
}

const initialState: ProductStore = {
  products: [],
  selectedProduct: {} as Product || JSON.parse(localStorage.getItem("selectedProduct") || "null"),
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    try {
      const response = productsData;
      console.log(response);

      return response;
    } catch (error) {
      throw new Error("Failed to fetch products");
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSelectedProduct: (state, action: PayloadAction<Product>) => {
      state.selectedProduct = action.payload;
      localStorage.setItem("selectedProduct", JSON.stringify(action.payload));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.loading = false;
          state.products = action.payload;
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch products";
      });
  },
});

export const productReducer = productSlice.reducer;
