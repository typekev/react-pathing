import styled, { css } from 'styled-components'
import { NODE_WIDTH } from '../constants'
import { MODES } from '../types'

interface Props {
  mode: MODES
}

const Node = styled.div`
  display: inline-block;
  width: calc(${NODE_WIDTH}em - 0.0625rem);
  height: calc(${NODE_WIDTH}em - 0.0625rem);
  border: 0.0625rem solid;
  border-color: grey;
  margin-bottom: -0.0625rem;
  margin-right: -0.0625rem;

 ${({ mode }: Props) =>
   mode === MODES.FILL_MODE &&
   css`
     background-color: black;
     border-color: black;
   `}

 ${({ mode }: Props) =>
   mode === MODES.START_NODE_MODE &&
   css`
     background-color: green;
     border-color: green;
   `}

 ${({ mode }: Props) =>
   mode === MODES.TARGET_NODE_MODE &&
   css`
     background-color: red;
     border-color: red;
   `}
`

export default Node
