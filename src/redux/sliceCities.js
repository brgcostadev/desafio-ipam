import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = [];

const sliceCities = createSlice({
  name: "cities",
  initialState: INITIAL_STATE,
  reducers: {
    addCities(state, { payload }) {
      return payload;
    },
  },
});

export default sliceCities.reducer;

export const { addCities } = sliceCities.actions;

export const useCities = (state) => {
  return state.cities;
};
