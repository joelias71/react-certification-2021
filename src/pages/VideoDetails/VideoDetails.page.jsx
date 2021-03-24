import React from 'react';
import { Container, SelectedVideo, ListOfVideos } from './VideoDetails.styles';
import CardDetail from '../../components/CardDetail';
import { useGlobal } from '../../providers/Global';

function VideoDetails() {
  const { state } = useGlobal();
  return (
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
        </div>
      </SelectedVideo>
      <ListOfVideos>
        {state.listofVideos
          .map((video) => (
            <CardDetail
              key={video.etag}
              image={video.snippet.thumbnails.high.url}
              title={video.snippet.title}
              description={video.snippet.description}
              video={video}
            />
          ))
          .splice(1)}
      </ListOfVideos>
    </Container>
  );
}

export default VideoDetails;
