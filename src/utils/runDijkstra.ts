import { MODES, Node } from '../types';
import dijkstra from '../pathers/dijkstra';
import clearPaths from './clearPaths';

const runDijkstra = (
  grid: Node[][],
  setGrid: React.Dispatch<React.SetStateAction<Node[][]>>,
  startNode?: Node,
  targetNode?: Node,
) => () =>
  startNode &&
  targetNode &&
  clearPaths(grid, setGrid).then(clearedGrid => {
    const path = dijkstra({ startNode, endNode: targetNode, grid: clearedGrid });
    const nextGrid = [...clearedGrid];

    path.shift();
    path.pop();
    path.filter(Boolean).forEach(({ x, y, index }, pathIndex) => {
      nextGrid[x][y] = {
        x,
        y,
        index,
        pathIndex: grid[x][y].mode === MODES.PATH_NODE_MODE ? 0 : pathIndex,
        mode: MODES.PATH_NODE_MODE,
      };
    });

    setGrid(nextGrid);
  });

export default runDijkstra;
