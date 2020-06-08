import React, { useState, useEffect } from 'react';
import Cell from './Cell';
import runPather from '../utils/runPather';
import { addEventListeners } from '../utils';
import BoardSection from './BoardSection';
import BoardRow from './BoardRow';
import { MODES, Node, Pathers } from '../types';
import { MODE_TOGGLE_MAP, ENTERABLE_MODES, DRAGGABLE_MODES } from '../constants';
import SpeedDial from './SpeedDial';
import handleNodeSelect from './Board/handleNodeSelect';
import initBoard from './Board/initBoard';

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

  const flatGrid = grid.flat();
  const startNode = flatGrid.find(node => node.mode === MODES.START_NODE_MODE);
  const targetNode = flatGrid.find(node => node.mode === MODES.TARGET_NODE_MODE);

  useEffect(() => {
    if (!startNode && !targetNode) {
      initBoard(grid, setGrid);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [grid, setGrid]);

  return (
    <BoardSection>
      {grid &&
        grid.map((row, rowIndex) => (
          <BoardRow key={rowIndex}>
            {row.map(node => (
              <Cell
                {...node}
                key={node.index}
                onMouseDown={() =>
                  setMode(
                    handleNodeSelect(
                      setGrid,
                      node,
                      mode === MODES.DEFAULT_NODE_MODE ? MODE_TOGGLE_MAP[node.mode] : mode,
                    ),
                  )
                }
                onMouseEnter={async () =>
                  mouseDown &&
                  handleNodeSelect(setGrid, node, ENTERABLE_MODES.includes(mode) && mode)
                }
                onMouseLeave={async () =>
                  mouseDown &&
                  DRAGGABLE_MODES.includes(mode) &&
                  handleNodeSelect(setGrid, node, MODES.CLEAR_MODE)
                }
              />
            ))}
          </BoardRow>
        ))}
      <SpeedDial
        mode={mode}
        setMode={setMode}
        runPather={(pather: Pathers) => {
          runPather(pather, setGrid, startNode, targetNode);
        }}
      />
    </BoardSection>
  );
};

export default Board;
