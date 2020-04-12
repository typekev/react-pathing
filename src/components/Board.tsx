import React, { useState, useEffect } from 'react';
import Cell from './Cell';
import { addEventListeners } from '../utils';
import BoardSection from './BoardSection';
import BoardRow from './BoardRow';
import handleNodeSelect from './handleNodeSelect';
import SpeedDial from './SpeedDial';
import { MODES, Node } from '../types';
import { MODE_TOGGLE_MAP } from '../constants';
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
    const flatGrid = grid.flat();
    const startNode = flatGrid.find(node => node.mode === MODES.START_NODE_MODE);
    const targetNode = flatGrid.find(node => node.mode === MODES.TARGET_NODE_MODE);

    if (flatGrid.length > 1) {
      if (!startNode) {
        const startNodePos = {
          x: Math.floor(Math.random() * grid.length),
          y: Math.floor(Math.random() * grid[0].length),
        };

        handleNodeSelect(
          grid,
          setGrid,
          {
            ...startNodePos,
            index: parseInt(`${startNodePos.x}${startNodePos.y}`),
            mode: MODES.DEFAULT_NODE_MODE,
          },
          MODES.START_NODE_MODE,
        );
      }

      if (!targetNode) {
        const targetNodePos = {
          x: Math.floor(Math.random() * grid.length),
          y: Math.floor(Math.random() * grid[0].length),
        };

        while (startNode && startNode.x === targetNodePos.x && startNode.y === targetNodePos.y) {
          targetNodePos.x = Math.floor(Math.random() * grid.length);
          targetNodePos.y = Math.floor(Math.random() * grid[0].length);
        }

        handleNodeSelect(
          grid,
          setGrid,
          {
            ...targetNodePos,
            index: parseInt(`${targetNodePos.x}${targetNodePos.y}`),
            mode: MODES.DEFAULT_NODE_MODE,
          },
          MODES.TARGET_NODE_MODE,
        );
      }
    }

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
