
import styled from "styled-components";
import { WINDOW_PADDING } from "../constants";


const Main = styled.main`
  width: calc(100% - ${WINDOW_PADDING * 2}rem);
  height: calc(100% - ${WINDOW_PADDING * 2}rem);
  padding: ${WINDOW_PADDING}rem;
`;

export default Main;
