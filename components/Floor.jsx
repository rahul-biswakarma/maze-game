import React from "react";

const Floor = (props) => {
  return (
    <mesh {...props} recieveShadow={true}>
      <boxGeometry attach="geometry" args={[2000, 1, 2000]} />
      <meshPhysicalMaterial color="white" />
    </mesh>
  );
};

export default Floor;
