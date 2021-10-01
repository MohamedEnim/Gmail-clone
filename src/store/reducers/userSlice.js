import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.user = action.payload;
    },
    signOut: (state) => {
      state.user = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { signIn, signOut } = UserSlice.actions;
export const selectUser = (state) => state.user.user;
export default UserSlice.reducer;
