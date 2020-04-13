import { MODES, Node } from '../../types';
import handleNodeSelect from './handleNodeSelect';

const initBoard = (grid: Node[][], setGrid: React.Dispatch<React.SetStateAction<Node[][]>>) => {
  const flatGrid = grid.flat();
  const startNode = flatGrid.find(node => node.mode === MODES.START_NODE_MODE);
  const targetNode = flatGrid.find(node => node.mode === MODES.TARGET_NODE_MODE);

  if (flatGrid.length > 1) {
    if (!startNode) {
      const startNodePos = {
        x: Math.floor(Math.random() * grid.length),
        y: Math.floor(Math.random() * grid[0].length),
      };

      handleNodeSelect(
        grid,
        setGrid,
        {
          ...startNodePos,
          mode: MODES.DEFAULT_NODE_MODE,
        },
        MODES.START_NODE_MODE,
      );
    }

    if (!targetNode) {
      const targetNodePos = {
        x: Math.floor(Math.random() * grid.length),
        y: Math.floor(Math.random() * grid[0].length),
      };

      while (startNode && startNode.x === targetNodePos.x && startNode.y === targetNodePos.y) {
        targetNodePos.x = Math.floor(Math.random() * grid.length);
        targetNodePos.y = Math.floor(Math.random() * grid[0].length);
      }

      handleNodeSelect(
        grid,
        setGrid,
        {
          ...targetNodePos,
          mode: MODES.DEFAULT_NODE_MODE,
        },
        MODES.TARGET_NODE_MODE,
      );
    }
  }
  return { startNode, targetNode };
};

export default initBoard;
