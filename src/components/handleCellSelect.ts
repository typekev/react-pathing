import { MODES } from "../types";

const handleCellSelect = (
    mode: MODES,
    setSelectedCells: React.Dispatch<React.SetStateAction<MODES[][]>>,
    selectedCells: MODES[][],
    rowIndex: number,
    cellIndex: number,
    newValue?: MODES,
) => {
    const newSelectedCells = [...selectedCells];
    const newSelectedCellValue = newValue || (mode === MODES.FILL_MODE ? MODES.FILL_MODE : MODES.CLEAR_MODE);
    newSelectedCells[rowIndex][cellIndex] = newSelectedCellValue
    setSelectedCells(newSelectedCells);
    return newSelectedCellValue
};

export default handleCellSelect