import React from "react";
import { useSelector } from "react-redux";

import Box from "./Box";
import Stack from "../utils/stack";
import getNeighbour from "../utils/getNeighbours";

const Grid = () => {
  var grid = [];
  const startX = useSelector((state) => state.world.startX);
  const startY = useSelector((state) => state.world.startY);
  const endX = useSelector((state) => state.world.endX);
  const endY = useSelector((state) => state.world.endY);

  for (let i = startX; i <= endX; i++) {
    var col = [];
    for (let j = startY; j <= endY; j++)
      if (i % 2 == 1 || j % 2 == 1)
        col.push({ x: i, y: j, visited: true, blocked: true });
      else col.push({ x: i, y: j, visited: false, blocked: false });
    grid.push(col);
  }

  let x = startX,
    y = startY;
  const nextStack = new Stack();

  nextStack.push({ x: x, y: y });

  while (!nextStack.isEmpty()) {
    let current = nextStack.pop();
    grid[current.x][current.y].visited = true;
    grid[current.x][current.y].blocked = false;
    let neighbours = getNeighbour(
      current.x,
      current.y,
      grid,
      startX,
      startY,
      endX,
      endY
    );
    if (neighbours.length > 0) {
      nextStack.push(current);
      let next = neighbours[Math.floor(Math.random() * neighbours.length)];
      grid[next.borderX][next.borderY].blocked = false;
      grid[next.x][next.y].visited = true;
      nextStack.push({ x: next.x, y: next.y });
    }
  }

  return (
    <>
      {grid.map((col) => {
        return col.map((corr) => {
          return corr.blocked === true ? <Box corr={corr} z={0} /> : <></>;
        });
      })}
    </>
  );
};

export default Grid;
