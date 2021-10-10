import { createSlice } from "@reduxjs/toolkit";

const initialState = false;
export const logCheck = createSlice({
  name: "isLogged",
  initialState,
  reducers: {
    changeLog: (state) => (state = !state),
    checkLog: (state) => state,
  },
});

export const { changeLog, checkLog } = logCheck.actions;

export default logCheck.reducer;
