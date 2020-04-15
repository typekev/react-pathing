import React, { useState, useEffect } from 'react';
import Cell from './Cell';
import { addEventListeners } from '../utils';
import BoardSection from './BoardSection';
import BoardRow from './BoardRow';
import { MODES, Node } from '../types';
import { MODE_TOGGLE_MAP, ENTERABLE_MODES } from '../constants';
import SpeedDial from './SpeedDial';
import handleNodeSelect from './Board/handleNodeSelect';
import initBoard from './Board/initBoard';
import dijkstra from '../pathers/dijkstra';
import clearPaths from '../utils/clearPaths';

const runDijkstra = (
  grid: Node[][],
  setGrid: React.Dispatch<React.SetStateAction<Node[][]>>,
  startNode?: Node,
  targetNode?: Node,
) => () =>
  startNode &&
  targetNode &&
  clearPaths(grid, setGrid).then(grid => {
    const path = dijkstra({ startNode, endNode: targetNode, grid });
    const nextGrid = [...grid];

    path.shift();
    path.pop();
    path.filter(Boolean).forEach(({ x, y, index }) => {
      nextGrid[x][y] = { x, y, index, mode: MODES.PATH_NODE_MODE };
    });

    setGrid(nextGrid);
  });

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
                  handleNodeSelect(grid, setGrid, node, ENTERABLE_MODES.includes(mode) && mode)
                }
              />
            ))}
          </BoardRow>
        ))}
      <SpeedDial
        mode={mode}
        setMode={setMode}
        runDijkstra={runDijkstra(grid, setGrid, startNode, targetNode)}
      />
    </BoardSection>
  );
};

export default Board;
