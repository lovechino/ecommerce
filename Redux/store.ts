import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./product";
import userSlice from "./auth";
import cartSlice from "./cart";
export const makeStore = () => {
  return configureStore({
    reducer: {
      product: productSlice,
      user: userSlice,
      cart: cartSlice,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
