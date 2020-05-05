import styled from 'styled-components';
import { WINDOW_PADDING } from '../constants';
import theme from '../theme';

const Main = styled.main`
  width: calc(100% - ${WINDOW_PADDING * 2}rem);
  height: calc(100% - ${WINDOW_PADDING * 2}rem);
  padding: ${WINDOW_PADDING}rem;
  background-color: ${theme.palette.background.paper};
`;

export default Main;
