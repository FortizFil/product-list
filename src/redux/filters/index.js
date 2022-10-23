import { createSlice } from "@reduxjs/toolkit";
import qs from "qs";

const location = qs.parse(window.location.search,{ ignoreQueryPrefix: true });

const initialState = {
  title: location.title || "",
  priceFrom: location.priceFrom || "",
  priceTo: location.priceTo || "",
  startDate: location.startDate || "",
  endDate: location.endDate || "",
  currentPage: 1,
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeTitle: (state, { payload }) => {
      state.title = payload;
    },
    changePriceFrom: (state, { payload }) => {
      state.priceFrom = payload;
    },
    changePriceTo: (state, { payload }) => {
      state.priceTo = payload;
    },
    changeStartDate: (state, { payload }) => {
      state.startDate = payload;
    },
    changeEndDate: (state, { payload }) => {
      state.endDate = payload;
    },
    changeCurrentPage: (state, { payload }) => {
      state.currentPage = payload;
    },
    clearFilters: (state) => {
      state.title = "";
      state.priceFrom = "";
      state.priceTo = "";
      state.startDate = "";
      state.endDate = "";
    },
  },
});

export const {
  changeTitle,
  changePriceFrom,
  changePriceTo,
  changeStartDate,
  changeEndDate,
  changeCurrentPage,
  clearFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
