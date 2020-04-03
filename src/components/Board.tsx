import React, { useState, useEffect } from "react";
import Cell from "./Cell";
import { WINDOW_PADDING, CELL_WIDTH } from "../constants";
import { addEventListeners } from "../utils";
import BoardSection from "./BoardSection";
import BoardRow from "./BoardRow";

const mainElement = document.getElementById("root");
const mainElementStyle = mainElement && window.getComputedStyle(mainElement);
const fontSize = mainElement
  ? parseFloat(getComputedStyle(mainElement).fontSize) || 16
  : 16;
const dimensionOffset = WINDOW_PADDING * fontSize * 2;
const getBoardDimensions = () =>
  mainElementStyle && [
    parseInt(mainElementStyle.getPropertyValue("width")) - dimensionOffset,
    parseInt(mainElementStyle.getPropertyValue("height")) - dimensionOffset
  ];

const Board = () => {
  const boardDimensions = getBoardDimensions();
  const grid =
    boardDimensions &&
    [
      ...Array(Math.floor(boardDimensions[1] / (CELL_WIDTH * fontSize)))
    ].map((_i, rowIndex) =>
      [...Array(Math.floor(boardDimensions[0] / (CELL_WIDTH * fontSize)))].map(
        (_j, cellIndex, self) => rowIndex * self.length + cellIndex
      )
    );

  const [selectedCells, setSelectedCells] = useState(
    grid?.map(row => row.map(() => false))
  );

  const [mouseDowm, setMouseDown] = useState(false);

  useEffect(() => {
    mainElement &&
      addEventListeners(mainElement, ["mousedown", "touchstart"], () =>
        setMouseDown(true)
      );
    mainElement &&
      addEventListeners(mainElement, ["mouseup", "touchend"], () =>
        setMouseDown(false)
      );
  }, []);

  return (
    <BoardSection>
      {selectedCells &&
        grid?.map((row, rowIndex) => (
          <BoardRow key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <Cell
                key={cell}
                selected={selectedCells[rowIndex][cellIndex]}
                onMouseDown={() => {
                  const newSelectedCells = [...selectedCells];
                  newSelectedCells[rowIndex][cellIndex] = !selectedCells[
                    rowIndex
                  ][cellIndex];
                  setSelectedCells(newSelectedCells);
                }}
                onMouseEnter={
                  mouseDowm
                    ? () => {
                        const newSelectedCells = [...selectedCells];
                        newSelectedCells[rowIndex][cellIndex] = !selectedCells[
                          rowIndex
                        ][cellIndex];
                        setSelectedCells(newSelectedCells);
                      }
                    : () => {}
                }
              />
            ))}
          </BoardRow>
        ))}
    </BoardSection>
  );
};

export default Board;
