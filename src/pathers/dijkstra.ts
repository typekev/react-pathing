import { Node, PatherProps } from '../types';
import PriorityQueue from '../utils/PriorityQueue';
import getNeighbors from '../utils/getNeighbors';

interface Props extends PatherProps { }

const dijkstra = ({ startNode, endNode, grid }: Props): Node[] => {
  const flatGrid = grid.flat();
  const unVisited: Set<Node> = new Set(flatGrid);
  const tentativeDistances: number[] = flatGrid.map(({ index }) =>
    index === startNode.index ? 0 : Infinity,
  );
  const trace: Map<Node, Node> = new Map();
  const queue = new PriorityQueue();

  queue.enqueue([startNode, 0]);

  while (!queue.isEmpty()) {
    const shortestStep = queue.dequeue()!;
    const [currentNode, currentNodeDistance] = shortestStep;

    if (trace.has(endNode) || !unVisited.has(currentNode)) {
      break;
    }

    getNeighbors(currentNode, grid, unVisited).forEach(neighbor => {
      const newTentativeDistance = currentNodeDistance + 1; // hard coded weight

      if (newTentativeDistance < tentativeDistances[neighbor.index]) {
        tentativeDistances[neighbor.index] = newTentativeDistance;
        trace.set(neighbor, currentNode);
        queue.enqueue([neighbor, newTentativeDistance]);
        unVisited.delete(currentNode);
      }
    });
  }

  const path = [endNode];
  let lastStep = endNode;

  while (lastStep.index !== startNode.index) {
    const lastStepTrace = trace.get(lastStep);
    if (!lastStepTrace) {
      break;
    }
    path.unshift(lastStepTrace);
    lastStep = lastStepTrace;
  }

  return path;
};

export default dijkstra;
