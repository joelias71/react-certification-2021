import {
  CHANGE_THEME,
  SET_PARAM,
  SET_VIDEO,
  SET_LIST_OF_VIDEOS,
  SET_ERROR,
  UPDATE_FAVORITES_SELECTED_VIDEO,
  UPDATE_FAVORITES_LIST_OF_VIDEOS,
} from '../actions/actions';
import { addVideo, deleteVideo, isFavoriteVideo } from '../utils/storage';

export default function reducer(state, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return { ...state, darkMode: !state.darkMode };
    case SET_PARAM:
      return { ...action.payload };
    case SET_VIDEO:
      return {
        ...state,
        selectedVideo: {
          ...action.payload.selectedVideo,
          favorite: isFavoriteVideo(action.payload.selectedVideo.etag),
        },
      };
    case SET_LIST_OF_VIDEOS:
      return { ...state, listofVideos: action.payload.listofVideos };
    case SET_ERROR:
      return { ...state, error: action.payload.error };
    case UPDATE_FAVORITES_SELECTED_VIDEO:
      if (action.payload) {
        addVideo(state.selectedVideo);
      } else {
        deleteVideo(state.selectedVideo.etag);
      }
      return {
        ...state,
        selectedVideo: { ...state.selectedVideo, favorite: action.payload },
      };
    case UPDATE_FAVORITES_LIST_OF_VIDEOS:
      return { ...state, error: action.payload.error };
    default:
      return state;
  }
}
