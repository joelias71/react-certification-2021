import React from 'react';
import TextTruncate from 'react-text-truncate';
import { CardDetailStyled } from './CardDetail.styles';

export default function CardDetail({
  image,
  title,
  description,
  video,
  setSelectedVideo,
}) {
  return (
    <CardDetailStyled onClick={() => setSelectedVideo(video)}>
      <img src={image} alt={title} />
      <div className="cardDetail">
        <TextTruncate
          line={1}
          element="h1"
          truncate="..."
          text={title.replace('&#39;', '')}
        />
        <TextTruncate line={2} element="p" truncate="..." text={description} />
      </div>
    </CardDetailStyled>
  );
}
