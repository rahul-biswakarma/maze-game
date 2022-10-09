import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const boxSlice = createSlice({
  name: "box",
  initialState,
  reducers: {
    // setDisc: (state, action) => {
    //   state.disc = action.payload;
    // },
  },
});

export const { setDisc } = boxSlice.actions;

export default boxSlice.reducer;
