import cloneDeep from 'lodash.clonedeep';
import { MODES, Node } from '../types';

const clearPaths = async (
  grid: Node[][],
  setGrid: React.Dispatch<React.SetStateAction<Node[][]>>,
) =>
  Promise.resolve(grid.flat().filter(node => node.mode === MODES.PATH_NODE_MODE)).then(
    pathNodes => {
      const nextGrid = cloneDeep(grid);

      pathNodes.forEach(({ x, y, index }) => {
        nextGrid[x][y] = { x, y, index, mode: MODES.CLEAR_MODE };
      });
      
      setGrid(nextGrid);
      return nextGrid;
    },
  );

export default clearPaths;
