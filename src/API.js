import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '90cfe661c2323ab539dac15dcff3c499';

export const getTrend = async () => {
  const res = await axios.get(`trending/movie/day`, {
    params: {
      api_key: API_KEY
    },
  });
  return res.data.results;
};

export const getMovieById = async (id) => {
  const res = await axios.get(`movie/${id}&language=en-US`, {
    params: {
      api_key: API_KEY
    },
  });
  return res.data;
};

export const getMovieCast = async (id) => {
  const res = await axios.get(`movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  return res.data;
};

export const getMovieReviews = async (id) => {
  const res = await axios.get(`movie/${id}/reviews`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  return res.data;
};

export const getMovieByName = async (name) => {
  const res = await axios.get(`search/movie/`, {
    params: {
      api_key: API_KEY,
      query: name,
      language: 'en-US',
    },
  });
  return res.data;
};


