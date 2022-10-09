import { store } from "/redux/store";
import { setGrid } from "/redux/reducers/worldSlice";

const grid = [];
const startX = store.getState().world.startX;
const startY = store.getState().world.startY;
const endX = store.getState().world.endX;
const endY = store.getState().world.endY;

for (let i = startX; i <= endX; i++) {
  for (let j = startY; j <= endY; j++) {
    grid.push({ x: i, y: j });
  }
}

store.dispatch(setGrid(grid));
