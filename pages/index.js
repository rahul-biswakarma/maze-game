import React from "react";
import { Canvas } from "@react-three/fiber";

import Grid from "/components/Grid";
import Floor from "/components/Floor";
import OrbitControls from "/components/OrbitControls";
import Boundary from "/components/Boundary";

const Home = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <Canvas
        className="bg-white"
        shadows={true}
        camera={{ position: [0, 20, 0] }}
      >
        <ambientLight color={"white"} intensity={0.8} />
        <OrbitControls />
        <Floor position={[0, -1, 0]} />
        <Boundary />
        <Grid />
      </Canvas>
    </div>
  );
};

export default Home;
