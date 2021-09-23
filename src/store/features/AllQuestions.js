import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const changeSlice = createSlice({
  name: "allQuestions",
  initialState,
  reducers: {
    quesList: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { quesList } = changeSlice.actions;

export default changeSlice.reducer;
