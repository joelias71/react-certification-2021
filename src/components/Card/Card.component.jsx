import React from 'react';
import { CardStyled } from './Card.styles';
import { useGlobal } from '../../providers/Global';
import { SET_VIDEO, SET_SEE_VIDEO_DETAIL } from '../../actions/actions';

export default function Card({ image, title, description, video }) {
  const { dispatch } = useGlobal();
  return (
    <CardStyled
      onClick={() => {
        dispatch({
          type: SET_VIDEO,
          payload: { selectedVideo: video },
        });
        dispatch({
          type: SET_SEE_VIDEO_DETAIL,
        });
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
