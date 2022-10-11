import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useSelector } from "react-redux";

import Grid from "/components/Grid";
import Floor from "/components/Floor";
import OrbitControls from "/components/OrbitControls";
import Boundary from "/components/Boundary";

const Home = () => {
  const startX = useSelector((state) => state.world.startX);
  const startY = useSelector((state) => state.world.startY);
  const endX = useSelector((state) => state.world.endX);
  const endY = useSelector((state) => state.world.endY);

  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <Canvas
        className="bg-white"
        shadows={true}
        camera={{
          position: [5, 20, 5],
          fov: 75,
          near: 0.1,
          far: 1000,
        }}
      >
        <Suspense fallback={null}>
          <ambientLight color={"white"} intensity={0.8} />
          <OrbitControls />
          <directionalLight
            color="white"
            intensity={0.5}
            position={[Math.floor(endX / 2), 40, Math.floor(endY / 2)]}
          />
          <Floor />
          <Boundary position={[startX, 1, startY]} />
          <Grid position={[startX, 1, startY]} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Home;
