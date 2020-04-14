import { MODES, Node } from '../types';

const getValidNode = (node: Node) => !!(node && node.mode !== MODES.FILL_MODE) && node;

const getNeighbors = ({ x, y }: Node, grid: Node[][], unVisited: Set<Node>): Node[] =>
  [
    unVisited.has(grid[x][y - 1]) && getValidNode(grid[x][y - 1]),
    grid[x + 1] && unVisited.has(grid[x + 1][y]) && getValidNode(grid[x + 1][y]),
    unVisited.has(grid[x][y + 1]) && getValidNode(grid[x][y + 1]),
    grid[x - 1] && unVisited.has(grid[x - 1][y]) && getValidNode(grid[x - 1][y]),
  ].filter(Boolean) as Node[];

export default getNeighbors;
