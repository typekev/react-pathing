import cloneDeep from 'lodash.clonedeep';
import { MODES, Node } from '../../types';
import { MODE_TOGGLE_MAP } from '../../constants';

interface PartialNode extends Omit<Node, 'index'> {
  index?: number;
}

const handleNodeSelect = (
  setGrid: React.Dispatch<React.SetStateAction<Node[][]>>,
  { x, y, index, mode: currentMode }: PartialNode,
  modeOverride?: MODES | false,
) => {
  const nextMode = modeOverride || MODE_TOGGLE_MAP[currentMode];
  setGrid(grid => {
    const nextGrid = cloneDeep(grid);
    nextGrid[x][y] = {
      x,
      y,
      index: index === undefined ? nextGrid[x][y].index : index,
      mode: nextMode,
    };
    return nextGrid;
  });
  return nextMode;
};

export default handleNodeSelect;
