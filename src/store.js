// This is global store/ centralized store
// Redux store
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux/user/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
