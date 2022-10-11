import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";

const Box = (props) => {
  const tempArray = [0, 1, 2, 3, 4, 5];

  const blackTextures = [];
  blackTextures.push(useLoader(TextureLoader, "assets/b1.png"));
  blackTextures.push(useLoader(TextureLoader, "assets/b2.png"));
  blackTextures.push(useLoader(TextureLoader, "assets/b3.png"));
  blackTextures.push(useLoader(TextureLoader, "assets/b4.png"));
  blackTextures.push(useLoader(TextureLoader, "assets/b5.png"));
  blackTextures.push(useLoader(TextureLoader, "assets/b6.png"));
  blackTextures.push(useLoader(TextureLoader, "assets/b7.png"));
  blackTextures.push(useLoader(TextureLoader, "assets/b8.png"));
  blackTextures.push(useLoader(TextureLoader, "assets/b9.png"));
  blackTextures.push(useLoader(TextureLoader, "assets/b10.png"));
  blackTextures.push(useLoader(TextureLoader, "assets/b11.png"));
  blackTextures.push(useLoader(TextureLoader, "assets/b12.png"));

  const whiteTextures = [];
  whiteTextures.push(useLoader(TextureLoader, "assets/w1.png"));
  whiteTextures.push(useLoader(TextureLoader, "assets/w2.png"));
  whiteTextures.push(useLoader(TextureLoader, "assets/w3.png"));
  whiteTextures.push(useLoader(TextureLoader, "assets/w4.png"));
  whiteTextures.push(useLoader(TextureLoader, "assets/w5.png"));
  whiteTextures.push(useLoader(TextureLoader, "assets/w6.png"));
  whiteTextures.push(useLoader(TextureLoader, "assets/w7.png"));
  whiteTextures.push(useLoader(TextureLoader, "assets/w8.png"));
  whiteTextures.push(useLoader(TextureLoader, "assets/w9.png"));
  whiteTextures.push(useLoader(TextureLoader, "assets/w10.png"));
  whiteTextures.push(useLoader(TextureLoader, "assets/w11.png"));

  let textureSelector = Math.floor(Math.random() * 3);
  return (
    <mesh
      position={[props.corr.x, props.z, props.corr.y]}
      recieveShadow={true}
      castShadow={true}
      key={`x${props.corr.x}y${props.corr.y}`}
    >
      <boxBufferGeometry attach="geometry" args={[1, 2, 1]} />
      {tempArray.map((item, index) => {
        if (props.textureType == "white")
          return (
            <meshStandardMaterial
              key={`tex-${item}`}
              map={
                whiteTextures[Math.floor(Math.random() * whiteTextures.length)]
              }
              attach={`material-${item}`}
              alphaTest={0}
              needsUpdate={true}
              clearcoat={1}
              clearcoatRoughness={1}
              flatShading={true}
            />
          );
        else if (textureSelector == 1)
          return (
            <meshStandardMaterial
              key={`tex-${item}`}
              map={
                blackTextures[Math.floor(Math.random() * blackTextures.length)]
              }
              attach={`material-${item}`}
              alphaTest={0}
              needsUpdate={true}
              clearcoat={1}
              clearcoatRoughness={1}
              flatShading={true}
            />
          );
        else
          return (
            <meshStandardMaterial
              key={`tex-${item}`}
              map={blackTextures[0]}
              attach={`material-${item}`}
              alphaTest={0}
              needsUpdate={true}
              clearcoat={1}
              clearcoatRoughness={1}
              flatShading={true}
            />
          );
      })}
    </mesh>
  );
};

export default Box;
