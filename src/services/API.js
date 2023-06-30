import axios from 'axios';

const KEY = 'f349a39e64c59477c80d357e4aa644a7';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getTrendMovies = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${KEY}`
  );
  return data;
};

export const getMovieDetails = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${KEY}`
  );
  return data;
};

export const getSearchMovie = async query => {
  const { data } = await axios.get(
    `${BASE_URL}/search/movie?api_key=${KEY}&query=${query}`
  );
  return data;
};

export const getMovieCast = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}`
  );
  return data;
};

export const getMovieReviews = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}`
  );
  return data;
};
