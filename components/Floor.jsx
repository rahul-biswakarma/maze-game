import React from "react";
import { useSelector } from "react-redux";

import Box from "/components/Box";

const Floor = () => {
  const startX = useSelector((state) => state.world.startX) - 1;
  const startY = useSelector((state) => state.world.startY) - 1;
  const endX = useSelector((state) => state.world.endX) + 1;
  const endY = useSelector((state) => state.world.endY) + 1;

  var floorCoordinates = [];

  for (let i = startX; i <= endX; i++) {
    for (let j = startY; j <= endY; j++) {
      floorCoordinates.push({ x: i, y: j });
    }
  }

  return (
    <>
      {floorCoordinates.map((corr) => {
        return corr.x == startX + 1 && corr.y == startY + 1 ? (
          <mesh
            position={[corr.x, -2, corr.y]}
            recieveShadow={true}
            castShadow={true}
            key={`floorx${corr.x}y${corr.y}`}
          >
            <boxBufferGeometry attach="geometry" args={[1, 2, 1]} />
            <meshStandardMaterial color="blue" />
          </mesh>
        ) : corr.x == endX - 1 && corr.y == endY - 1 ? (
          <mesh
            position={[corr.x, -2, corr.y]}
            recieveShadow={true}
            castShadow={true}
            key={`floorx${corr.x}y${corr.y}`}
          >
            <boxBufferGeometry attach="geometry" args={[1, 2, 1]} />
            <meshStandardMaterial color="red" />
          </mesh>
        ) : (
          <Box
            key={`floorx${corr.x}y${corr.y}`}
            corr={corr}
            z={-2}
            textureType="white"
          />
        );
      })}
    </>
  );
};

export default Floor;
