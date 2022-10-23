import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveUserInfo: (state, { payload }) => {
      state.token = payload.access_token;
      state.user = payload.user;
    },
    setUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const { saveUserInfo, setUser } = authSlice.actions;

export default authSlice.reducer;
