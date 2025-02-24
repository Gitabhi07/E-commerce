import { createSlice, current } from "@reduxjs/toolkit";
// import { Default_items } from "../data/items";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    currentfetch: false,
  },
  reducers: {
    markFetchDone: (state, action) => {
      return (state.fetchDone = true);
    },
    markFetchStarted: (state, action) => {
      return (state.currentfetch = true);
    },
    markFetchFinished: (state, action) => {
      return (state.currentfetch = false);
    },
  },
});

export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;
