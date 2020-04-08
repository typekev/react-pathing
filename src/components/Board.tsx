import React, { useState, useEffect } from "react";
import Cell from "./Cell";
import { WINDOW_PADDING, CELL_WIDTH } from "../constants";
import { addEventListeners } from "../utils";
import BoardSection from "./BoardSection";
import BoardRow from "./BoardRow";
import handleCellSelect from "./handleCellSelect";
import SpeedDial from "./SpeedDial";
import { MODES } from "../types";

const mainElement = document.getElementById("root");
const mainElementStyle = mainElement && window.getComputedStyle(mainElement);
const fontSize = mainElement
  ? parseFloat(getComputedStyle(mainElement).fontSize) || 16
  : 16;
const dimensionOffset = WINDOW_PADDING * fontSize * 2;
const getBoardDimensions = () =>
  mainElementStyle && [
    parseInt(mainElementStyle.getPropertyValue("width")) - dimensionOffset,
    parseInt(mainElementStyle.getPropertyValue("height")) - dimensionOffset,
  ];

const Board = () => {
  const boardDimensions = getBoardDimensions();
  const grid = boardDimensions
    ? [
        ...Array(Math.floor(boardDimensions[1] / (CELL_WIDTH * fontSize))),
      ].map((_i, rowIndex) =>
        [
          ...Array(Math.floor(boardDimensions[0] / (CELL_WIDTH * fontSize))),
        ].map((_j, cellIndex, self) => rowIndex * self.length + cellIndex)
      )
    : [[]];

  const [selectedCells, setSelectedCells] = useState<boolean[][]>(
    grid.map((row) => row.map(() => false))
  );

  const [mouseDown, setMouseDown] = useState(false);
  const [mode, setMode] = useState(MODES.FILL_MODE);

  useEffect(() => {
    if (mainElement) {
      addEventListeners(mainElement, ["mousedown", "touchstart"], () =>
        setMouseDown(true)
      );
      addEventListeners(mainElement, ["mouseup", "touchend"], () => {
        setMouseDown(false);
        setMode(MODES.FILL_MODE);
      });
    }
  }, []);

  return (
    <BoardSection>
      {selectedCells &&
        grid.map((row, rowIndex) => (
          <BoardRow key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <Cell
                key={cell}
                selected={selectedCells[rowIndex][cellIndex]}
                onMouseDown={() =>
                  setMode(
                    handleCellSelect(
                      mode,
                      setSelectedCells,
                      selectedCells,
                      rowIndex,
                      cellIndex,
                      !selectedCells[rowIndex][cellIndex]
                    )
                      ? MODES.FILL_MODE
                      : MODES.CLEAR_MODE
                  )
                }
                onMouseEnter={() =>
                  mouseDown &&
                  handleCellSelect(
                    mode,
                    setSelectedCells,
                    selectedCells,
                    rowIndex,
                    cellIndex
                  )
                }
              />
            ))}
          </BoardRow>
        ))}
      <SpeedDial />
    </BoardSection>
  );
};

export default Board;
