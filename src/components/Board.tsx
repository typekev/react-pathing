import React from "react";
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
`;

const BoardRow = styled.div`
  margin-top: -0.25rem;
`;

const Board = () => {
  const boardDimensions = getBoardDimensions();
  return (
    <BoardSection>
      {boardDimensions &&
        [
          ...Array(Math.floor(boardDimensions[1] / (CELL_WIDTH * fontSize)))
        ].map(key => (
          <BoardRow key={key}>
            {[
              ...Array(Math.floor(boardDimensions[0] / (CELL_WIDTH * fontSize)))
            ].map(key => (
              <Cell key={key} />
            ))}
          </BoardRow>
        ))}
    </BoardSection>
  );
};

export default Board;
