import { MODES } from '../types'

const handleNodeSelect = (
  mode: MODES,
  setSelectedNodes: React.Dispatch<React.SetStateAction<MODES[][]>>,
  selectedNodes: MODES[][],
  rowIndex: number,
  nodeIndex: number,
  newValue?: MODES
) => {
  const newSelectedNodes = [...selectedNodes]
  const newSelectedNodeValue =
    newValue || (mode === MODES.FILL_MODE ? MODES.FILL_MODE : MODES.CLEAR_MODE)
  newSelectedNodes[rowIndex][nodeIndex] = newSelectedNodeValue
  setSelectedNodes(newSelectedNodes)
  return newSelectedNodeValue
}

export default handleNodeSelect
