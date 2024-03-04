import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const config = {
  api_key: "3600a7d1df50418da99152adfa7da76c",
  language: "en-US",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjAwYTdkMWRmNTA0MThkYTk5MTUyYWRmYTdkYTc2YyIsInN1YiI6IjY1ZGNlZDdmNWM1NjRlMDE3Yzc4YjI3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x8WRC3heItoc05vknN1hWWwI81T9ilhtBazKRsi3N6Q",
  },
};

export const getFilms = async (query, page, { abortController }) => {
  const response = await axios.get("/search/movie", {
    params: {
      api_key: config.api_key,
      include_adult: false,
      language: config.language,
      query: query,
      per_page: "24",
      page,
    },
    signal: abortController.signal,
  });
  console.log(response.data);
  return response.data;
};

export const getFilmsById = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}`, {
    params: {
      api_key: config.api_key,
      include_adult: false,
      language: config.language,
    },
  });
  return response.data;
};

export const getCredits = async (movieId, page) => {
  const response = await axios.get(`/movie/${movieId}/credits`, {
    params: {
      api_key: config.api_key,
      include_adult: false,
      language: config.language,
      page,
      per_page: "12",
    },
  });
  return response.data;
};

export const getReviews = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/reviews`, {
    params: {
      api_key: config.api_key,
      include_adult: false,
      language: config.language,
    },
  });
  return response.data;
};
export const getTrends = async (time_window) => {
  const response = await axios.get(`/trending/movie/${time_window}`, {
    params: {
      api_key: config.api_key,
      include_adult: false,
      language: config.language,
      per_page: "18",
    },
  });
  console.log(response.data);
  return response.data;
};

export const getTrailer = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/videos`, {
    params: {
      api_key: config.api_key,
      include_adult: false,
      language: config.language,
    },
  });
  console.log(response.data);
  return response.data.results.filter((v) => v.name === "Official Trailer");
};
