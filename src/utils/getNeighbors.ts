import { MODES, Node } from '../types';

const getValidNode = (node: Node) => !!(node && node.mode !== MODES.FILL_MODE) && node;

const getNeighbors = ({ x, y }: Node, grid: Node[][]): Node[] =>
  [
    getValidNode(grid[x][y - 1]),
    grid[x + 1] && getValidNode(grid[x + 1][y]),
    getValidNode(grid[x][y + 1]),
    grid[x - 1] && getValidNode(grid[x - 1][y]),
  ].filter(Boolean) as Node[];

export default getNeighbors;
