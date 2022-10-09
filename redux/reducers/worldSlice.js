import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  grid: [],
  startX: 0,
  startY: 0,
  endX: 500,
  endY: 500,
  camX: 0,
  camY: 0,
  camZ: 10,
};

const worldSlice = createSlice({
  name: "world",
  initialState,
  reducers: {
    setGrid: (state, action) => {
      state.startX = action.payload;
    },
    setStartX: (state, action) => {
      state.startX = action.payload;
    },
    setStartY: (state, action) => {
      state.startY = action.payload;
    },
    setEndX: (state, action) => {
      state.endX = action.payload;
    },
    setEndY: (state, action) => {
      state.endY = action.payload;
    },
    setCamX: (state, action) => {
      state.camX = action.payload;
    },
    setCamY: (state, action) => {
      state.camY = action.payload;
    },
    setCamZ: (state, action) => {
      state.camZ = action.payload;
    },
  },
});

export const {
  setGrid,
  setStartX,
  setStartY,
  setEndX,
  setEndY,
  setCamX,
  setCamY,
  setCamZ,
} = worldSlice.actions;

export default worldSlice.reducer;
