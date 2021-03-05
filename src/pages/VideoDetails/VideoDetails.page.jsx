import React from 'react';
import { Container, SelectedVideo, ListOfVideos } from './VideoDetails.styles';
import CardDetail from '../../components/CardDetail';

function VideoDetails({ selectedVideo, listofVideos, setSelectedVideo }) {
  return (
    <Container>
      <SelectedVideo>
        <iframe
          src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}?autoplay=1`}
          title={selectedVideo.snippet.title}
          frameBorder="0"
          allowFullScreen
        />
        <div>
          <h1>{selectedVideo.snippet.title}</h1>
          <p>{selectedVideo.snippet.description}</p>
        </div>
      </SelectedVideo>
      <ListOfVideos>
        {listofVideos
          .map((video) => (
            <CardDetail
              key={video.etag}
              image={video.snippet.thumbnails.high.url}
              title={video.snippet.title}
              description={video.snippet.description}
              video={video}
              setSelectedVideo={setSelectedVideo}
            />
          ))
          .splice(1)}
      </ListOfVideos>
    </Container>
  );
}

export default VideoDetails;
