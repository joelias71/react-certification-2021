import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Navbar from '../../components/Navbar';
import { GlobalStyles } from '../../components/globalStyles';
import { lightTheme, darkTheme } from '../../components/Themes';
import Card from '../../components/Card';
import { youtube } from '../../utils/youtube-videos-mock';
import './Home.styles.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const cardList = youtube.items.map((video) => (
    <Card
      key={video.etag}
      image={video.snippet.thumbnails.high.url}
      title={video.snippet.title}
      description={video.snippet.description}
    />
  ));

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="container-list">{cardList.splice(1)}</div>
      </ThemeProvider>
    </>
  );
}

export default App;
