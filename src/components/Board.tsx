import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Cell from "./Cell";
import { WINDOW_PADDING, CELL_WIDTH } from "../constants";

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

const BoardSection = styled.section`
  width: 100%;
  height: 100%;
  white-space: pre;
  user-select: none;
`;

const BoardRow = styled.div`
  margin-top: -0.25rem;
`;

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
    mainElement?.addEventListener("mousedown", () => setMouseDown(true));
    mainElement?.addEventListener("mouseup", () => setMouseDown(false));
  }, []);

  return (
    <BoardSection>
      {selectedCells &&
        grid?.map((row, rowIndex) => (
          <BoardRow key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <Cell
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
                key={cell}
              />
            ))}
          </BoardRow>
        ))}
    </BoardSection>
  );
};

export default Board;
