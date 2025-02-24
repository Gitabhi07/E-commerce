import { createSlice } from "@reduxjs/toolkit";
import { Default_items } from "../data/items";

const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addinitialItem: (store, action) => {
      console.log("reducer", store, action);

      return store;
    },
  },
});

export const itemsActions = itemsSlice.actions;
export default itemsSlice;
