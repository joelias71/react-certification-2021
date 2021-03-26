import React from 'react';
import { useHistory } from 'react-router';
import { CardStyled } from './Card.styles';
import { useGlobal } from '../../providers/Global';
import { SET_VIDEO } from '../../actions/actions';

export default function Card({ image, title, description, video }) {
  const { dispatch } = useGlobal();
  const history = useHistory();
  return (
    <CardStyled
      onClick={() => {
        dispatch({
          type: SET_VIDEO,
          payload: { selectedVideo: video },
        });
        history.push(`/video${window.location.pathname}`);
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
