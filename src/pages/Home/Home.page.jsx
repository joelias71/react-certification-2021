import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import Navbar from '../../components/Navbar';
import { GlobalStyles } from '../../components/globalStyles';
import { lightTheme, darkTheme } from '../../components/Themes';
import Card from '../../components/Card';
import { ContainerList } from './Home.styles';
// import { youtube } from '../../utils/youtube-videos-mock';
import { getVideos } from '../../services/getVideos';
import VideoDetail from '../VideoDetails';

function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [param, setParam] = useState('wizeline');
  const [listofVideos, setListofVideos] = useState([]);
  const [error, setError] = useState();

  const [selectedVideo, setSelectedVideo] = useState({});
  const [seeVideoDetail, setSeeVideoDetail] = useState(false);

  useEffect(() => {
    getVideos(param, setListofVideos, setError);
    // setListofVideos(youtube.items);
    // setError(undefined);
  }, [param]);

  const showContent = () => {
    if (error) {
      return <p id="errorMsg">Error getting the data from the server</p>;
    }
    if (listofVideos.length === 0) {
      return <p id="errorMsg">No videos to show</p>;
    }
    return listofVideos
      .map((video) => (
        <Card
          key={video.etag}
          image={video.snippet.thumbnails.high.url}
          title={video.snippet.title}
          description={video.snippet.description}
          video={video}
          setSelectedVideo={setSelectedVideo}
          setSeeVideoDetail={setSeeVideoDetail}
        />
      ))
      .splice(1);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} setParam={setParam} />
      {!seeVideoDetail && <ContainerList>{showContent()}</ContainerList>}
      {seeVideoDetail && (
        <VideoDetail
          selectedVideo={selectedVideo}
          listofVideos={listofVideos}
          setSelectedVideo={setSelectedVideo}
        />
      )}
    </ThemeProvider>
  );
}

export default Home;
