import React from 'react';
import Card from '../Card';

export default function HomeContent({ videos }) {
  if (videos.error) {
    return <p id="errorMsg">Error getting the data from the server</p>;
  }
  if (videos.listofVideos.length === 0) {
    return <p id="errorMsg">No videos to show</p>;
  }
  return videos.listofVideos.map((video) => (
    <Card
      key={video.etag}
      image={video.snippet.thumbnails.high.url}
      title={video.snippet.title}
      description={video.snippet.description}
      video={video}
    />
  ));
}
