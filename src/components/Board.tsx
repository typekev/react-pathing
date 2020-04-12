import React, { useState, useEffect } from 'react'
import Node from './Node'
import { WINDOW_PADDING, NODE_WIDTH } from '../constants'
import { addEventListeners } from '../utils'
import BoardSection from './BoardSection'
import BoardRow from './BoardRow'
import handleNodeSelect from './handleNodeSelect'
import SpeedDial from './SpeedDial'
import { MODES } from '../types'

const mainElement = document.getElementById('root')
const mainElementStyle = mainElement && window.getComputedStyle(mainElement)
const fontSize = mainElement
  ? parseFloat(getComputedStyle(mainElement).fontSize) || 16
  : 16
const dimensionOffset = WINDOW_PADDING * fontSize * 2
const getBoardDimensions = () =>
  mainElementStyle && [
    parseInt(mainElementStyle.getPropertyValue('width')) - dimensionOffset,
    parseInt(mainElementStyle.getPropertyValue('height')) - dimensionOffset,
  ]

const VALUE_SWAP_MAP = {
  [MODES.FILL_MODE]: MODES.CLEAR_MODE,
  [MODES.CLEAR_MODE]: MODES.FILL_MODE,
  [MODES.TARGET_NODE_MODE]: MODES.CLEAR_MODE,
  [MODES.START_NODE_MODE]: MODES.START_NODE_MODE,
}

const Board = () => {
  const boardDimensions = getBoardDimensions()
  const grid = boardDimensions
    ? [
        ...Array(Math.floor(boardDimensions[1] / (NODE_WIDTH * fontSize))),
      ].map((_i, rowIndex) =>
        [
          ...Array(Math.floor(boardDimensions[0] / (NODE_WIDTH * fontSize))),
        ].map((_j, nodeIndex, self) => rowIndex * self.length + nodeIndex)
      )
    : [[]]

  const [nodes, setNodes] = useState<MODES[][]>(
    grid.map((row) => row.map(() => MODES.CLEAR_MODE))
  )

  const [mouseDown, setMouseDown] = useState(false)
  const [mode, setMode] = useState(MODES.FILL_MODE)

  useEffect(() => {
    if (mainElement) {
      addEventListeners(mainElement, ['mousedown', 'touchstart'], () =>
        setMouseDown(true)
      )
      addEventListeners(mainElement, ['mouseup', 'touchend'], () => {
        setMouseDown(false)
        setMode(MODES.FILL_MODE)
      })
      handleNodeSelect(
        mode,
        setNodes,
        nodes,
        Math.floor(Math.random() * nodes.length),
        Math.floor(Math.random() * nodes[0].length),
        MODES.START_NODE_MODE
      )
      handleNodeSelect(
        mode,
        setNodes,
        nodes,
        Math.floor(Math.random() * nodes.length),
        Math.floor(Math.random() * nodes[0].length),
        MODES.TARGET_NODE_MODE
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <BoardSection>
      {nodes &&
        grid.map((row, rowIndex) => (
          <BoardRow key={rowIndex}>
            {row.map((node, nodeIndex) => (
              <Node
                key={node}
                mode={nodes[rowIndex][nodeIndex]}
                onMouseDown={() =>
                  setMode(
                    handleNodeSelect(
                      mode,
                      setNodes,
                      nodes,
                      rowIndex,
                      nodeIndex,
                      mode !== MODES.FILL_MODE
                        ? mode
                        : VALUE_SWAP_MAP[nodes[rowIndex][nodeIndex]]
                    )
                  )
                }
                onMouseEnter={() =>
                  mouseDown &&
                  handleNodeSelect(
                    mode,
                    setNodes,
                    nodes,
                    rowIndex,
                    nodeIndex
                  )
                }
              />
            ))}
          </BoardRow>
        ))}
      <SpeedDial mode={mode} setMode={setMode} />
    </BoardSection>
  )
}

export default Board
