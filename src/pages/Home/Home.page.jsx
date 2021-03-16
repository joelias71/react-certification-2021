import React, { useEffect } from 'react';
import { useGlobal } from '../../providers/Global';
import Navbar from '../../components/Navbar';
import { ContainerList } from './Home.styles';
import { getVideos } from '../../services/getVideos';
import VideoDetail from '../VideoDetails';
import HomeContent from '../../components/HomeContent/HomeContent.page';

function Home() {
  const { state, dispatch } = useGlobal();

  useEffect(() => {
    if (state.param && state.param.length >= 3) {
      getVideos(state.param, dispatch);
    }
  }, [state.param, dispatch]);

  return (
    <>
      <Navbar />
      {!state.seeVideoDetail && (
        <ContainerList>
          <HomeContent />
        </ContainerList>
      )}
      {state.seeVideoDetail && <VideoDetail />}
    </>
  );
}

export default Home;
