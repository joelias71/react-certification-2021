import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useGlobal } from '../../providers/Global';
import { GlobalStyles } from '../globalStyles';
import { lightTheme, darkTheme } from '../Themes';
import Home from '../../pages/Home';

export default function App() {
  const { state } = useGlobal();
  return (
    <ThemeProvider theme={state.darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
}
