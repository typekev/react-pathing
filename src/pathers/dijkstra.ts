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
  const times: any = {};
  let trace: any = {};
  const queue = new PriorityQueue();

  times[startNode.index] = 0;

  grid.flat().forEach(node => {
    if (node.mode !== startNode.mode) {
      times[node.index] = Infinity;
    }
  });

  queue.enqueue([startNode, 0]);

  while (!queue.isEmpty()) {
    const shortestStep = queue.dequeue()!;
    const currentNode = shortestStep[0];

    getNeighbors(currentNode, grid).forEach(neighbor => {
      const time = times[currentNode.index] + 0;

      if (time < times[neighbor.index]) {
        times[neighbor.index] = time;
        trace[neighbor.index] = currentNode;
        queue.enqueue([neighbor, time]);
      }
    });
  }

  const path = [endNode];
  let lastStep = endNode;

  while (lastStep && lastStep.index !== startNode.index) {
    path.unshift(trace[lastStep.index]);
    lastStep = trace[lastStep.index];
  }

  return path;
};

export default dijkstra;
