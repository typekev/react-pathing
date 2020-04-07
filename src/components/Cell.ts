import styled, { css } from "styled-components";
import { CELL_WIDTH, NODE_TYPE_START, NODE_TYPE_TARGET } from '../constants'

interface Props {
  selected: boolean;
  type?: string;
}

const Cell = styled.div`
  display: inline-block;
  width: calc(${CELL_WIDTH}em - 0.0625rem);
  height: calc(${CELL_WIDTH}em - 0.0625rem);
  border: 0.0625rem solid;
  border-color: grey;
  margin-bottom: -0.0625rem;
  margin-right: -0.0625rem;

  ${({ selected }: Props) => selected && css`
    background-color: black;
    border-color: black;
 `}

 ${({ type }: Props) => type === NODE_TYPE_START && css`
    background-color: black;
    border-color: black;
 `}

 ${({ type }: Props) => type === NODE_TYPE_TARGET && css`
    background-color: black;
    border-color: black;
 `}
`;

export default Cell;
