import React from 'react';
import Card from '../Card';
import { useGlobal } from '../../providers/Global';

export default function HomeContent() {
  const { state } = useGlobal();

  if (state.error) {
    return <p id="errorMsg">Error getting the data from the server</p>;
  }
  if (state.listofVideos.length === 0) {
    return <p id="errorMsg">No videos to show</p>;
  }
  return state.listofVideos
    .map((video) => (
      <Card
        key={video.etag}
        image={video.snippet.thumbnails.high.url}
        title={video.snippet.title}
        description={video.snippet.description}
        video={video}
      />
    ))
    .splice(1);
}
