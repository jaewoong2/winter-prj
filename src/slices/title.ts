import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const titleSlice = createSlice({
  name: "title",
  initialState: "초기값",
  reducers: {
    update: (state, action: PayloadAction<{ data: string }>) => {
      return action.payload.data;
    },
  },
});

export const { update: titleUpdateAction } = titleSlice.actions;

export default titleSlice;
