import { MODES } from '../types'

const handleNodeSelect = (
  mode: MODES,
  setNodes: React.Dispatch<React.SetStateAction<MODES[][]>>,
  nodes: MODES[][],
  rowIndex: number,
  nodeIndex: number,
  newValue?: MODES
) => {
  const newNodes = [...nodes]
  const newSelectedNodeValue =
    newValue || (mode === MODES.FILL_MODE ? MODES.FILL_MODE : MODES.CLEAR_MODE)
  newNodes[rowIndex][nodeIndex] = newSelectedNodeValue
  setNodes(newNodes)
  return newSelectedNodeValue
}

export default handleNodeSelect
