import styled, { css } from "styled-components";
import { CELL_WIDTH } from '../constants'
import { MODES } from "../types";

interface Props {
   mode: MODES;
}

const Cell = styled.div`
  display: inline-block;
  width: calc(${CELL_WIDTH}em - 0.0625rem);
  height: calc(${CELL_WIDTH}em - 0.0625rem);
  border: 0.0625rem solid;
  border-color: grey;
  margin-bottom: -0.0625rem;
  margin-right: -0.0625rem;



 ${({ mode }: Props) => mode === MODES.FILL_MODE && css`
    background-color: black;
    border-color: black;
 `}

 ${({ mode }: Props) => mode === MODES.TARGET_NODE_MODE && css`
    background-color: red;
    border-color: red;
 `}
`;

export default Cell;
