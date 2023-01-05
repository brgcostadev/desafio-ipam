import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = [];

const sliceStates = createSlice({
  name: "cities",
  initialState: INITIAL_STATE,
  reducers: {
    addStates(state, { payload }) {
      return payload;
    },
  },
});

export default sliceStates.reducer;

export const { addStates } = sliceStates.actions;

export const useStates = (state) => {
  return state.states;
};
