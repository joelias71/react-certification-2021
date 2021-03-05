import { axiosSearch } from './axios';

export const getVideos = (param, setListofVideos, setError) => {
  axiosSearch
    .get(`?part=snippet&maxResults=21&q=${param}&key=${process.env.REACT_APP_API_KEY}`)
    .then((response) => setListofVideos(response.data.items))
    .catch((e) => setError(e));
};
