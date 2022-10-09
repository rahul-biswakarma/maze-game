import React from "react";
import { useSelector, useDispactor } from "react-redux";

const Grid = () => {
  
  var grid = [];
  for (let i = startX; i <= endX; i++) {
    for (let j = startY; j <= endY; j++) {
      grid.push(<Box ket={`cell${i}${j}`} position={[i, 1, j]} />);
    }
  }
};

export default Grid;
