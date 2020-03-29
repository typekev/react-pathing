import styled from "styled-components";
import { CELL_WIDTH } from '../constants'

const Cell = styled.div`
  display: inline-block;
  width: calc(${CELL_WIDTH}em - 0.0625rem);
  height: calc(${CELL_WIDTH}em - 0.0625rem);
  border: 0.0625rem solid lightgrey;
  margin-bottom: -0.0625rem;
  margin-right: -0.0625rem;
`;

export default Cell;