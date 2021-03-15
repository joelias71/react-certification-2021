import React from 'react';
import { CardStyled } from './Card.styles';

export default function Card({
  image,
  title,
  description,
  video,
  setSelectedVideo,
  setSeeVideoDetail,
}) {
  return (
    <CardStyled
      onClick={() => {
        setSelectedVideo(video);
        setSeeVideoDetail(true);
      }}
    >
      <img src={image} alt={title} />
      <div className="card__content">
        <h1>{title.replace('&#39;', '')}</h1>
        <p>{description}</p>
      </div>
    </CardStyled>
  );
}
