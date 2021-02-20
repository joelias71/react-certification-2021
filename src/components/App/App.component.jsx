/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Navbar from '../Navbar';
import { GlobalStyles } from '../globalStyles';
import { lightTheme, darkTheme } from '../Themes';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
    </ThemeProvider>
  );
}

export default App;
