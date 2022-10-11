import { store } from "/redux/store";
import { setGrid } from "/redux/reducers/worldSlice";

function generateGrid() {
  let grid = [];
  const startX = store.getState().world.startX;
  const startY = store.getState().world.startY;
  const endX = store.getState().world.endX;
  const endY = store.getState().world.endY;

  for (let i = startX; i <= endX; i++) {
    for (let j = startY; j <= endY; j++) {
      if (Math.floor(Math.random() * (1 - 0 + 1) + 0))
        grid.push({ x: i, y: j });
    }
  }

  return (
    <>
      {grid.map((corr) => {
        return (
          <mesh
            position={[corr.x, 0, corr.y]}
            recieveShadow={true}
            castShadow={true}
            key={`x${corr.x}y${corr.y}`}
          >
            <boxGeometry />
            <meshPhysicalMaterial color={"blue"} />
          </mesh>
        );
      })}
    </>
  );
}

export default generateGrid;
