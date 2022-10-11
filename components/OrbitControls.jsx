import React, { useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";

const Controls = () => {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    controls.minDistance = -5;
    controls.maxDistance = 80;
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
};
export default Controls;
