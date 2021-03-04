import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Navbar from '../../components/Navbar';
import { GlobalStyles } from '../../components/globalStyles';
import { lightTheme, darkTheme } from '../../components/Themes';
import Card from '../../components/Card';
import { youtube } from '../../utils/youtube-videos-mock';
import { ContainerList } from './Home.styles';

function Home() {
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
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <ContainerList>{cardList.splice(1)}</ContainerList>
    </ThemeProvider>
  );
}

export default Home;
