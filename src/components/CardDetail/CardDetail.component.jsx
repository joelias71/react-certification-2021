import React from 'react';
import TextTruncate from 'react-text-truncate';
import { CardDetailStyled } from './CardDetail.styles';
import { useGlobal } from '../../providers/Global';
import { SET_VIDEO } from '../../actions/actions';

export default function CardDetail({ image, title, description, video }) {
  const { dispatch } = useGlobal();
  return (
    <CardDetailStyled
      onClick={() =>
        dispatch({
          type: SET_VIDEO,
          payload: { selectedVideo: video },
        })
      }
    >
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
