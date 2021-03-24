import React from 'react';
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
        {title && (
          <h1>
            {title.length > 40
              ? `${title.replace('&#39;', '').slice(0, 40)}...`
              : title.replace('&#39;', '')}
          </h1>
        )}
        <p>{description}</p>
      </div>
    </CardDetailStyled>
  );
}
