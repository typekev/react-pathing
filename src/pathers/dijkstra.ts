import { MODES } from "../types"

interface Node {
    x: number;
    y: number;
}

interface Props {
    startNode: Node;
    endNode: Node;
    grid: MODES[][]
}

type Path = number[][]

const dijkstra = ({ startNode, endNode, grid }: Props): Path => {

    return [[]]

}

export default dijkstra