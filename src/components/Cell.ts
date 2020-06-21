import { fade } from '@material-ui/core';
import styled, { css } from 'styled-components';
import { MODES, Node } from '../types';
import { NODE_WIDTH } from '../constants';
import theme from '../theme';

interface Props extends Node { }

const Cell = styled.div`
  display: inline-block;
  width: ${NODE_WIDTH}em;
  height: ${NODE_WIDTH}em;
  transition-property: background-color border-color;
  transition-duration: 100ms;
  transition-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
  background-color: transparent;
  box-shadow: 0px 0px 0px 0.5px;
  color: ${fade(theme.palette.secondary.contrastText, 0.4)} ;

  ${({ mode }: Props) =>
    mode === MODES.FILL_MODE &&
    css`
      background-color: ${theme.palette.secondary.contrastText} ;
      color: ${fade(theme.palette.secondary.contrastText, 0.5)} ;
    `}

  ${({ mode }: Props) =>
    mode === MODES.START_NODE_MODE &&
    css`
      background-color: ${theme.palette.primary.dark};
      color: ${theme.palette.primary.dark} ;
    `}

  ${({ mode }: Props) =>
    mode === MODES.TARGET_NODE_MODE &&
    css`
      background-color: ${theme.palette.error.main} ;
      color: ${theme.palette.error.main}} ;
    `}

  ${({ mode, pathIndex }: Props) =>
    mode === MODES.PATH_NODE_MODE &&
    css`
      transition-delay: ${(pathIndex || 0) * 60}ms;
      background-color: ${theme.palette.primary.main};
      color: ${theme.palette.primary.dark} ;
    `}
`;

export default Cell;
