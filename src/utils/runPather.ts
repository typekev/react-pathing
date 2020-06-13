import cloneDeep from 'lodash.clonedeep';
import { MODES, Node, PatherProps, Pathers } from '../types';
import getClearPaths from './getClearPaths';
import dijkstra from '../pathers/dijkstra';

export type PatherMap = {
  [key in Pathers]: ({ startNode, endNode, grid }: PatherProps) => Node[];
};

export const PATHER_MAP: PatherMap = {
  [Pathers.Dijkstra]: dijkstra,
  [Pathers.AStar]: dijkstra,
};

const runPather = (
  pather: Pathers,
  setGrid: React.Dispatch<React.SetStateAction<Node[][]>>,
  startNode?: Node,
  targetNode?: Node,
) =>
  startNode &&
  targetNode &&
  setGrid(grid => {
    const path = PATHER_MAP[pather]({ startNode, endNode: targetNode, grid });
    const nextGrid = cloneDeep(getClearPaths(grid));
    let i = 0;

    path.shift();
    path.pop();
    path.filter(Boolean).forEach(({ x, y, index }) => {
      nextGrid[x][y] = {
        x,
        y,
        index,
        pathIndex: grid[x][y].mode === MODES.PATH_NODE_MODE ? 0 : i++,
        mode: MODES.PATH_NODE_MODE,
      };
    });

    return nextGrid;
  });

export default runPather;
