import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useGlobal } from '../../providers/Global';

export default function HeartIcon({ isFavorite, type, style }) {
  const { dispatch } = useGlobal();
  return isFavorite ? (
    <FavoriteIcon
      style={style}
      onClick={() => {
        dispatch({
          type,
          payload: false,
        });
      }}
    />
  ) : (
    <FavoriteBorderIcon
      style={style}
      onClick={() => {
        dispatch({
          type,
          payload: true,
        });
      }}
    />
  );
}
