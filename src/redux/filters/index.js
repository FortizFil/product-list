import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  priceFrom: "",
  priceTo: "",
  startDate: '',
  endDate: '',
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilters: (state, { payload }) => {
      state.title = payload.title;
      state.priceFrom = payload.priceFrom;
      state.priceTo = payload.priceTo;
      state.startDate = payload.startDate;
      state.endDate = payload.endDate;
    },
  },
});

export const { changeFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
