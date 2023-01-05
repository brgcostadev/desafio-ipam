import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = [];

const sliceRegion = createSlice({
  name: "region",
  initialState: INITIAL_STATE,
  reducers: {
    changeRegion(state, { payload }) {
      return payload;
    },
  },
});

export default sliceRegion.reducer;

export const { changeRegion } = sliceRegion.actions;

export const useRegion = (state) => {
  return state.region;
};
