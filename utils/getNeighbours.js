export default function getNeighbour(x, y, grid, startX, startY, endX, endY) {
  let neighbour = [];
  if (x - 2 >= startX && grid[x - 2][y].visited === false)
    neighbour.push({ x: x - 2, y: y, borderX: x - 1, borderY: y });

  if (x + 2 <= endX && grid[x + 2][y].visited === false)
    neighbour.push({ x: x + 2, y: y, borderX: x + 1, borderY: y });

  if (y - 2 >= startY && grid[x][y - 2].visited === false)
    neighbour.push({ x: x, y: y - 2, borderX: x, borderY: y - 1 });

  if (y + 2 <= endY && grid[x][y + 2].visited === false)
    neighbour.push({ x: x, y: y + 2, borderX: x, borderY: y + 1 });

  return neighbour;
}
