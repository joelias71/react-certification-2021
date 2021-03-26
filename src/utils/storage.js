import { FAVORITE_VIDEOS } from './constants';

const storage = {
  get(key) {
    try {
      const rawValue = window.localStorage.getItem(key);
      return JSON.parse(rawValue);
    } catch (error) {
      console.error(`Error parsing storage item "${key}".`);
      return null;
    }
  },

  set(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  },
};

const deleteVideo = (id) => {
  const videos = storage.get(FAVORITE_VIDEOS);
  storage.set(FAVORITE_VIDEOS, {
    listofVideos: videos.listofVideos.filter((video) => {
      return video.etag !== id;
    }),
  });
};

const addVideo = (video) => {
  const videos = storage.get(FAVORITE_VIDEOS);
  if (!videos.listofVideos.some((e) => e.etag === video.etag)) {
    videos.listofVideos.push(video);
    storage.set(FAVORITE_VIDEOS, videos);
  }
};

const isFavoriteVideo = (id) => {
  const videos = storage.get(FAVORITE_VIDEOS);
  if (videos.listofVideos.some((e) => e.etag === id)) {
    return true;
  }
  return false;
};

export { storage, deleteVideo, addVideo, isFavoriteVideo };
