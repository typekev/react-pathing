import cloneDeep from 'lodash.clonedeep';
import { MODES, Node } from '../types';

const getClearPaths = (grid: Node[][]) => {
  const nextGrid = cloneDeep(grid);
  const pathNodes = grid.flat().filter(node => node.mode === MODES.PATH_NODE_MODE);

  pathNodes.forEach(({ x, y, index }) => {
    nextGrid[x][y] = { x, y, index, mode: MODES.CLEAR_MODE };
  });
  return nextGrid;
};

export default getClearPaths;
