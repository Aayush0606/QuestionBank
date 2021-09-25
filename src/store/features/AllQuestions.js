import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
export const changeSlice = createSlice({
  name: "allQuestions",
  initialState,
  reducers: {
    quesList: (state, action) => {
      const { arr } = action.payload;
      state.values = arr;
    },
    askQues: (state, action) => {
      const { arr } = action.payload;
      state.values.push(arr);
    },
  },
});

export const { quesList, askQues } = changeSlice.actions;

export default changeSlice.reducer;
