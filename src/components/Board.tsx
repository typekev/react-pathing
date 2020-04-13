import React, { useState, useEffect } from 'react';
import Cell from './Cell';
import { addEventListeners } from '../utils';
import BoardSection from './BoardSection';
import BoardRow from './BoardRow';
import { MODES, Node } from '../types';
import { MODE_TOGGLE_MAP } from '../constants';
import SpeedDial from './SpeedDial';
import handleNodeSelect from './Board/handleNodeSelect';
import initBoard from './Board/initBoard';
import dijkstra from '../pathers/dijkstra';

interface Props {
  grid: Node[][];
  setGrid: React.Dispatch<React.SetStateAction<Node[][]>>;
  mainElement: HTMLElement | null;
}

const Board = ({ grid, setGrid, mainElement }: Props) => {
  const [mouseDown, setMouseDown] = useState(false);
  const [mode, setMode] = useState(MODES.DEFAULT_NODE_MODE);

  useEffect(() => {
    if (mainElement) {
      addEventListeners(mainElement, ['mousedown', 'touchstart'], () => setMouseDown(true));
      addEventListeners(mainElement, ['mouseup', 'touchend'], () => {
        setMouseDown(false);
        setMode(MODES.DEFAULT_NODE_MODE);
      });
    }
  }, [mainElement]);

  useEffect(() => {
    const { startNode, targetNode } = initBoard(grid, setGrid);
    if (startNode && targetNode) {
      dijkstra({ startNode, endNode: targetNode, grid });
    }
  }, [grid, setGrid]);

  return (
    <BoardSection>
      {grid &&
        grid.map((row, rowIndex) => (
          <BoardRow key={rowIndex}>
            {row.map(node => (
              <Cell
                key={`${node.x}${node.y}`}
                mode={node.mode}
                onMouseDown={() =>
                  setMode(
                    handleNodeSelect(
                      grid,
                      setGrid,
                      node,
                      mode === MODES.DEFAULT_NODE_MODE ? MODE_TOGGLE_MAP[node.mode] : mode,
                    ),
                  )
                }
                onMouseEnter={() =>
                  mouseDown &&
                  handleNodeSelect(grid, setGrid, node, mode !== MODES.DEFAULT_NODE_MODE && mode)
                }
              />
            ))}
          </BoardRow>
        ))}
      <SpeedDial mode={mode} setMode={setMode} />
    </BoardSection>
  );
};

export default Board;
