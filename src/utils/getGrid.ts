import getBoardDimensions, { getFontSize } from './getBoardDimentions';
import { NODE_WIDTH } from '../constants';
import { Node, MODES } from '../types';
import range from './range';

const getGrid = async (mainElement: HTMLElement | null): Promise<Node[][]> => {
  const boardDimensions = await getBoardDimensions(mainElement);
  const fontSize = getFontSize(mainElement);
  const nodeSize = NODE_WIDTH * fontSize;
  const numRows = Math.floor(boardDimensions[1] / nodeSize);
  const numCellsPerRow = Math.floor(boardDimensions[0] / nodeSize);

  return range(numRows).map(rowIndex =>
    range(numCellsPerRow).map(index => ({
      x: rowIndex,
      y: index,
      index: rowIndex * numCellsPerRow + index,
      mode: MODES.CLEAR_MODE,
    })),
  );
};

export default getGrid;
