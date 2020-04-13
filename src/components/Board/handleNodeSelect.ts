import { MODES, Node } from '../../types';
import { MODE_TOGGLE_MAP } from '../../constants';

const handleNodeSelect = (
  grid: Node[][],
  setGrid: React.Dispatch<React.SetStateAction<Node[][]>>,
  { x, y, mode: currentMode }: Node,
  modeOverride?: MODES | false,
) => {
  const nextGrid = [...grid];
  const nextMode = modeOverride || MODE_TOGGLE_MAP[currentMode];
  nextGrid[x][y] = { x, y, index: parseInt(`${x}${y}`), mode: nextMode };
  setGrid(nextGrid);
  return nextMode;
};

export default handleNodeSelect;
