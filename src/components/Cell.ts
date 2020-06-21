import styled, { css } from 'styled-components';
import { MODES, Node } from '../types';
import { NODE_WIDTH } from '../constants';
import theme from '../theme';

interface Props extends Node { }

const Cell = styled.div`
  display: inline-block;
  width: calc(${NODE_WIDTH}em - 0.0625rem);
  height: calc(${NODE_WIDTH}em - 0.0625rem);
  background-color: transparent;
  border: 0.0625rem solid;
  border-color: grey;
  margin-bottom: -0.0625rem;
  margin-right: -0.0625rem;
  transition-property: background-color border-color;
  transition-duration: 100ms;
  transition-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);


  ${({ mode }: Props) =>
    mode === MODES.FILL_MODE &&
    css`
      background-color: black;
      border-color: black;
    `}

  ${({ mode }: Props) =>
    mode === MODES.START_NODE_MODE &&
    css`
      background-color: ${theme.palette.primary.dark};
      border-color: ${theme.palette.primary.dark} ;
    `}

  ${({ mode }: Props) =>
    mode === MODES.TARGET_NODE_MODE &&
    css`
      background-color: ${theme.palette.error.main} ;
      border-color: ${theme.palette.error.main}} ;
    `}

  ${({ mode, pathIndex }: Props) =>
    mode === MODES.PATH_NODE_MODE &&
    css`
      transition-delay: ${(pathIndex || 0) * 60}ms;
      background-color: ${theme.palette.primary.main};
      border-color: ${theme.palette.primary.dark} ;
    `}
`;

export default Cell;
