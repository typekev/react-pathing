const handleCellSelect = (
    setAdditionMode: React.Dispatch<React.SetStateAction<boolean | undefined>>,
    additionMode: boolean | undefined,
    setSelectedCells: React.Dispatch<React.SetStateAction<boolean[][]>>,
    selectedCells: boolean[][],
    rowIndex: number,
    cellIndex: number
) => {
    const newSelectedCells = [...selectedCells];
    const newCellValue =
        additionMode === undefined
            ? !selectedCells[rowIndex][cellIndex]
            : additionMode;
    setAdditionMode(newCellValue);
    newSelectedCells[rowIndex][cellIndex] = newCellValue;
    setSelectedCells(newSelectedCells);
};

export default handleCellSelect