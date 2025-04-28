import { CartIntemType } from "@/Utils/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [] as Array<CartIntemType>,
    totalAmount: 0,
  },
  reducers: {
    addItem(state, action: PayloadAction<CartIntemType>) {
      const newItem = action.payload;
      console.log("Price of newItem:", newItem.Price);
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.qualitiy++;
      } else {
        state.items.push({ ...newItem, qualitiy: 1 });
      }
      state.totalAmount += newItem.Price;
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        state.totalAmount -= existingItem.Price * existingItem.qualitiy;
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
