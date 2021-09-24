import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
console.log(initialState);
export const changeSlice = createSlice({
  name: "allQuestions",
  initialState,
  reducers: {
    quesList: (state, action) => {
      state.push(action.payload);
      return state;
    },
  },
});

export const { quesList } = changeSlice.actions;

export default changeSlice.reducer;
