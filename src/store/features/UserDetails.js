import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
export const userHub = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { userData } = action.payload;
      state.values = [userData];
    },
    delUser: (state) => (state = initialState),
  },
});

export const { setUser, delUser } = userHub.actions;

export default userHub.reducer;
