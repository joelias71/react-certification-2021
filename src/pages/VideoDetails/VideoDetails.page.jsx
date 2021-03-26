import React from 'react';
import { Redirect } from 'react-router-dom';
import { Container, SelectedVideo, ListOfVideos } from './VideoDetails.styles';
import CardDetail from '../../components/CardDetail';
import { useGlobal } from '../../providers/Global';
import Navbar from '../../components/Navbar';
import HeartIcon from '../../components/HeartIcon';
import { UPDATE_FAVORITES_SELECTED_VIDEO } from '../../actions/actions';
import { storage } from '../../utils/storage';
import { FAVORITE_VIDEOS } from '../../utils/constants';

function VideoDetails() {
  const { state } = useGlobal();
  const videos =
    window.location.pathname === '/video/' ? state : storage.get(FAVORITE_VIDEOS);

  if (
    !state.selectedVideo ||
    !state.selectedVideo.id ||
    !state.selectedVideo.id.videoId ||
    !state.selectedVideo.snippet ||
    state.listofVideos.length === 0
  ) {
    return <Redirect push to="/" />;
  }

  return (
    <>
      <Navbar />
      <Container>
        <SelectedVideo>
          <iframe
            src={`https://www.youtube.com/embed/${state.selectedVideo.id.videoId}?autoplay=1`}
            title={state.selectedVideo.snippet.title}
            frameBorder="0"
            allowFullScreen
          />
          <div>
            <h1>{state.selectedVideo.snippet.title}</h1>
            <p>{state.selectedVideo.snippet.description}</p>
            <HeartIcon
              type={UPDATE_FAVORITES_SELECTED_VIDEO}
              isFavorite={state.selectedVideo.favorite}
            />
          </div>
        </SelectedVideo>
        <ListOfVideos>
          {videos.listofVideos.map((video) => (
            <CardDetail
              key={video.etag}
              image={video.snippet.thumbnails.high.url}
              title={video.snippet.title}
              description={video.snippet.description}
              video={video}
            />
          ))}
        </ListOfVideos>
      </Container>
    </>
  );
}

export default VideoDetails;
