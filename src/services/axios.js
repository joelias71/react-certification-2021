import axios from 'axios';

export const axiosSearch = axios.create({
  baseURL: process.env.REACT_APP_YOUTUBE_SEARCH_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
