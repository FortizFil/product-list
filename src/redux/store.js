import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { AuthAPI } from "../services/AuthAPI";
import authSlice from "./auth";
import filtersSlice from "./filters";
import errorSlice from "./error";

export const store = configureStore({
  reducer: {
    [AuthAPI.reducerPath]: AuthAPI.reducer,
    auth: authSlice,
    filters: filtersSlice,
    error: errorSlice,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    AuthAPI.middleware,
  ],
});

setupListeners(store.dispatch);
