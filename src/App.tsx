import React, { useState, useEffect, useCallback } from 'react';
import { ThemeProvider } from '@material-ui/core';
import Main from './components/Main';
import Board from './components/Board';
import theme from './theme';
import { Node } from './types';
import getGrid from './utils/getGrid';

const mainElement = document.getElementById('root');

const App = () => {
  const [grid, setGrid] = useState<Node[][]>([[]]);

  useEffect(() => {
    const getGridAsync = async () => setGrid(await getGrid(mainElement));
    getGridAsync();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Board
          grid={grid}
          setGrid={useCallback(setGrid, [mainElement])}
          mainElement={mainElement}
        />
      </Main>
    </ThemeProvider>
  );
};

export default App;
