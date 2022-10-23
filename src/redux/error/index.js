import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: null,
};

export const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setError: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export const { setError } = errorSlice.actions;

export default errorSlice.reducer;
