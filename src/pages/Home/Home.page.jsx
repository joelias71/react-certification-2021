import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Navbar from '../../components/Navbar';
import { GlobalStyles } from '../../components/globalStyles';
import { lightTheme, darkTheme } from '../../components/Themes';

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
