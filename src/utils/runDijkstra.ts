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
  clearPaths(grid, setGrid).then(grid => {
    const path = dijkstra({ startNode, endNode: targetNode, grid });
    const nextGrid = [...grid];

    path.shift();
    path.pop();
    path.filter(Boolean).forEach(({ x, y, index }) => {
      nextGrid[x][y] = { x, y, index, mode: MODES.PATH_NODE_MODE };
    });

    setGrid(nextGrid);
  });

export default runDijkstra;