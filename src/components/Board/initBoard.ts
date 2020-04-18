import cloneDeep from 'lodash.clonedeep';
import { MODES, Node } from '../../types';

const initBoard = (grid: Node[][], setGrid: React.Dispatch<React.SetStateAction<Node[][]>>) => {
  const flatGrid = grid.flat();
  let startNode;
  let targetNode;

  if (flatGrid.length > 1) {
    startNode = flatGrid.find(node => node.mode === MODES.START_NODE_MODE);
    targetNode = flatGrid.find(node => node.mode === MODES.TARGET_NODE_MODE);

    if (!startNode) {
      const startNodePos = {
        x: Math.floor(Math.random() * grid.length),
        y: Math.floor(Math.random() * grid[0].length),
      };
      startNode = {
        ...grid[startNodePos.x][startNodePos.y],
        ...startNodePos,
        mode: MODES.START_NODE_MODE,
      };
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
      targetNode = {
        ...grid[targetNodePos.x][targetNodePos.y],
        ...targetNodePos,
        mode: MODES.TARGET_NODE_MODE,
      };
    }
    const nextGrid = cloneDeep(grid);
    nextGrid[startNode.x][startNode.y] = startNode;
    nextGrid[targetNode.x][targetNode.y] = targetNode;

    setGrid(nextGrid);
  }
  return { startNode, targetNode };
};

export default initBoard;
