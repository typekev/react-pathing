export enum MODES {
  FILL_MODE = 1,
  CLEAR_MODE,
  START_NODE_MODE,
  TARGET_NODE_MODE,
  PATH_NODE_MODE,

  DEFAULT_NODE_MODE,
}

export interface Node {
  x: number;
  y: number;
  index: number;
  pathIndex?: number;
  mode: MODES;
  weight?: number;
}

export interface PatherProps {
  startNode: Node;
  endNode: Node;
  grid: Node[][];
}

export enum Pathers {
  Dijkstra = 'Dijkstra',
  AStar = 'AStar'
};

export interface Options {
  pather: Pathers
}
