import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const darkSlice = createSlice({
  name: "dark",
  initialState: false,
  reducers: {
    change: (state, action: PayloadAction<{ theme: boolean }>) =>
      action.payload.theme,
  },
});

export const { change: changeAction } = darkSlice.actions;

export default darkSlice;
