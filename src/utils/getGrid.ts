import getBoardDimensions, { getFontSize } from './getBoardDimentions';
import { NODE_WIDTH } from '../constants';
import { Node, MODES } from '../types';
import range from './range';

const getGrid = async (mainElement: HTMLElement | null): Promise<Node[][]> => {
    const boardDimensions = await getBoardDimensions(mainElement);
    const fontSize = getFontSize(mainElement);
    return range(Math.floor(boardDimensions[1] / (NODE_WIDTH * fontSize))).map(rowIndex =>
        range(Math.floor(boardDimensions[0] / (NODE_WIDTH * fontSize))).map(index => ({
            x: rowIndex,
            y: index,
            index: parseInt(`${rowIndex}${index}`),
            mode: MODES.CLEAR_MODE,
        })),
    );
};

export default getGrid;
