import { MODES } from "../types";

const handleCellSelect = (
    mode: MODES,
    setSelectedCells: React.Dispatch<React.SetStateAction<boolean[][]>>,
    selectedCells: boolean[][],
    rowIndex: number,
    cellIndex: number,
    newValue?: boolean,
) => {
    const newSelectedCells = [...selectedCells];
    const newSelectedCellValue = newValue === undefined ? (mode === MODES.FILL_MODE ? true : false) : newValue;
    newSelectedCells[rowIndex][cellIndex] = newSelectedCellValue
    setSelectedCells(newSelectedCells);
    return newSelectedCellValue
};

export default handleCellSelect