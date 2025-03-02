import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: [],
};

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setTransactions: (state, action) => {
      const { payload } = action;
      state.transactions = payload;
    },
  },
});

const { reducer: transactionReducer, actions } = transactionSlice;
export const { setTransactions } = actions;
export default transactionReducer;
