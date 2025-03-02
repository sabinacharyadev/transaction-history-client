import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transaction: {},
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    setTransactions: (state, payload) => {
      state.transaction = payload;
    },
  },
});

const { reducer: transactionReducer, actions } = transactionSlice;
export const { setTransactions } = actions;
export default transactionReducer;
