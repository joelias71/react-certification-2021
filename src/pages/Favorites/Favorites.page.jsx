import React from 'react';
import { FAVORITE_VIDEOS } from '../../utils/constants';
import Navbar from '../../components/Navbar';
import { storage } from '../../utils/storage';
import { ContainerList } from '../Home/Home.styles';
import HomeContent from '../../components/HomeContent/HomeContent.page';

function Favorites() {
  return (
    <>
      <Navbar />
      <ContainerList>
        <HomeContent videos={storage.get(FAVORITE_VIDEOS)} />
      </ContainerList>
    </>
  );
}

export default Favorites;
