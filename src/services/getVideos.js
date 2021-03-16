import { axiosSearch } from './axios';
import { SET_LIST_OF_VIDEOS, SET_ERROR } from '../actions/actions';

export const getVideos = (param, dispatch) => {
  axiosSearch
    .get(`?part=snippet&maxResults=21&q=${param}&key=${process.env.REACT_APP_API_KEY}`)
    .then((response) =>
      dispatch({
        type: SET_LIST_OF_VIDEOS,
        payload: { listofVideos: response.data.items },
      })
    )
    .catch((e) =>
      dispatch({
        type: SET_ERROR,
        payload: { error: e },
      })
    );
};
