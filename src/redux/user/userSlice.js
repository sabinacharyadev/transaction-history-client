// This is a slice used to build and define initial state and function(reducer functions) to update state

import { createSlice } from "@reduxjs/toolkit";

// define initial state
// Define reducer function | Create a slice

const initialState = {
  user: {},
};

// returns a reducer
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      //reducer fn
      const { payload } = action;
      state.user = payload;
    },
  },
});

// These are all built and given by create slice function
// get reducer and rename it to userReducer
const { reducer: userReducer, actions } = userSlice;
export const { setUser } = actions;
export default userReducer;
