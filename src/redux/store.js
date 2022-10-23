import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { API } from "../services/API";
import authSlice from "./auth";
import filtersSlice from "./filters";
import errorSlice from "./error";

export const store = configureStore({
  reducer: {
    [API.reducerPath]: API.reducer,
    auth: authSlice,
    filters: filtersSlice,
    error: errorSlice,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    API.middleware,
  ],
});

setupListeners(store.dispatch);
