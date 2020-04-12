export enum MODES {
  FILL_MODE = 1,
  CLEAR_MODE,
  START_NODE_MODE,
  TARGET_NODE_MODE,
}

export interface Node {
  x: number
  y: number,
  mode: MODES,
}