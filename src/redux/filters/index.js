import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: sessionStorage.getItem("title") || "",
  priceFrom: sessionStorage.getItem("price-from") || "",
  priceTo: sessionStorage.getItem("price-to") || "",
  startDate: sessionStorage.getItem("date-from") || "",
  endDate: sessionStorage.getItem("date-to") || "",
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
  },
});

export const {
  changeTitle,
  changePriceFrom,
  changePriceTo,
  changeStartDate,
  changeEndDate,
  changeCurrentPage,
} = filtersSlice.actions;

export default filtersSlice.reducer;
