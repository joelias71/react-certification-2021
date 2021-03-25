import {
  CHANGE_THEME,
  SET_PARAM,
  SET_VIDEO,
  SET_LIST_OF_VIDEOS,
  SET_ERROR,
} from '../actions/actions';

export default function reducer(state, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return { ...state, darkMode: !state.darkMode };
    case SET_PARAM:
      return { ...action.payload };
    case SET_VIDEO:
      return { ...state, selectedVideo: action.payload.selectedVideo };
    case SET_LIST_OF_VIDEOS:
      return { ...state, listofVideos: action.payload.listofVideos };
    case SET_ERROR:
      return { ...state, error: action.payload.error };
    default:
      return state;
  }
}
