import { Node } from '../types';
import PriorityQueue from '../utils/PriorityQueue';
import getNeighbors from '../utils/getNeighbors';

interface Props {
  startNode: Node;
  endNode: Node;
  grid: Node[][];
}

type Path = Node[];

const dijkstra = ({ startNode, endNode, grid }: Props): Path => {
  const flatGrid = grid.flat();
  const times: number[] = flatGrid.map(({ index }) => (index === startNode.index ? 0 : Infinity));
  const trace: Map<Node, Node> = new Map();
  const queue = new PriorityQueue();

  queue.enqueue([startNode, 0]);

  while (!queue.isEmpty()) {
    const shortestStep = queue.dequeue()!;
    const currentNode = shortestStep[0];

    if (trace.has(endNode)) {
      break;
    }

    getNeighbors(currentNode, grid).forEach(neighbor => {
      const time = times[currentNode.index] + 0;

      if (time < times[neighbor.index]) {
        times[neighbor.index] = time;
        trace.set(neighbor, currentNode);
        queue.enqueue([neighbor, time]);
      }
    });
  }

  const path = [endNode];
  let lastStep = endNode;

  while (lastStep.index !== startNode.index) {
    const lastStepTrace = trace.get(lastStep)!;
    path.unshift(lastStepTrace);
    lastStep = lastStepTrace;
  }

  return path;
};

export default dijkstra;
