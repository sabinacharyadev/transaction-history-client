// This is global store/ centralized store
// Redux store
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/user/userSlice";
import transactionReducer from "./redux/transaction/transactionSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    transaction: transactionReducer,
  },
});

export default store;
