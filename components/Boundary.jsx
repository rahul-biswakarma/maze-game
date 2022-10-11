import React from "react";
import { useSelector } from "react-redux";

import Box from "/components/Box";

const Boundary = () => {
  const startX = useSelector((state) => state.world.startX) - 1;
  const startY = useSelector((state) => state.world.startY) - 1;
  const endX = useSelector((state) => state.world.endX) + 1;
  const endY = useSelector((state) => state.world.endY) + 1;

  var boundaryCoordinates = [];

  for (let i = startX; i <= endX; i++) {
    boundaryCoordinates.push({ x: i, y: startY });
  }
  for (let i = startX; i <= endX; i++) {
    boundaryCoordinates.push({ x: i, y: endY });
  }
  for (let i = startY + 1; i <= endY - 1; i++) {
    boundaryCoordinates.push({ x: startX, y: i });
  }
  for (let i = startY + 1; i <= endY - 1; i++) {
    boundaryCoordinates.push({ x: endX, y: i });
  }

  return (
    <>
      {boundaryCoordinates.map((corr) => {
        return <Box key={`bound${corr.x}${corr.y}`} corr={corr} z={0} />;
      })}
    </>
  );
};

export default Boundary;
