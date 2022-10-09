import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useSelector, useDispactor } from "react-redux";

import Grid from "/components/Grid";
import Floor from "/components/Floor";
import OrbitControls from "/components/OrbitControls";

const Home = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <Canvas
        className="bg-white"
        shadows={true}
        camera={{ position: [0, 10, 0] }}
      >
        <ambientLight color={"white"} intensity={0.8} />
        <OrbitControls />
        <Floor position={[0, -1, 0]} />
      </Canvas>
    </div>
  );
};

export default Home;
