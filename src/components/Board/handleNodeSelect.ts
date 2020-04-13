import { MODES, Node } from '../../types';
import { MODE_TOGGLE_MAP } from '../../constants';

interface PartialNode extends Omit<Node, 'index'> {
  index?: number;
}

const handleNodeSelect = (
  grid: Node[][],
  setGrid: React.Dispatch<React.SetStateAction<Node[][]>>,
  { x, y, index, mode: currentMode }: PartialNode,
  modeOverride?: MODES | false,
) => {
  const nextGrid = [...grid];
  const nextMode = modeOverride || MODE_TOGGLE_MAP[currentMode];
  nextGrid[x][y] = {
    x,
    y,
    index: index === undefined ? nextGrid[x][y].index : index,
    mode: nextMode,
  };
  setGrid(nextGrid);
  return nextMode;
};

export default handleNodeSelect;
