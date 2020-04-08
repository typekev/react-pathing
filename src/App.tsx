import React from "react";
import { ThemeProvider } from "@material-ui/core";
import Main from "./components/Main";
import Board from "./components/Board";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Board />
      </Main>
    </ThemeProvider>
  );
}

export default App;
