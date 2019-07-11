const MOVIE_DB_API_KEY = 'ed98d25919802b5020e8feb6c3923886';
const MOVIE_DB_BASE_URL = 'https://api.themoviedb.org/3';

const createMovieDbUrl = (relativeUrl, queryParams) => {
  const baseUrl = `${MOVIE_DB_BASE_URL}${relativeUrl}?`;
  const searchParams = new URLSearchParams(baseUrl);
  searchParams.append('api_key', MOVIE_DB_API_KEY);
  searchParams.append('language', 'en-US');
  if (queryParams) {
    Object.keys(queryParams)
      .forEach(paramName => searchParams.append(paramName, queryParams[paramName]));
  }
  return baseUrl + searchParams.toString();
};

const getMoviesByFilter = ({ page }, filterType) => {
  const fullUrl = createMovieDbUrl(`/movie/${filterType}`, {
    page,
  });
  return fetch(fullUrl);
};

const searchMovies = ({ page, query }) => {
  const fullUrl = createMovieDbUrl('/search/movie', {
    page,
    query,
  });
  return fetch(fullUrl);
};

const getMoviesByGenre = ({ page, genre }) => {
  const fullUrl = createMovieDbUrl('/discover/movie', {
    page,
  });
  const searchParams = new URLSearchParams(fullUrl);
  searchParams.append('sort_by', 'popularity.desc');
  searchParams.append('with_genres', genre);
  return fetch(fullUrl + searchParams.toString());
};

const getGenres = () => {
  const fullUrl = createMovieDbUrl('/genre/movie/list');
  return fetch(fullUrl);
};

const getMovieDetails = ({ movieId }) => {
  const fullUrl = createMovieDbUrl(`/movie/${movieId}`);
  return fetch(fullUrl);
};

const getMovieVideo = (movieId) => {
  const fullUrl = createMovieDbUrl(`/movie/${movieId}/videos`);
  return fetch(fullUrl);
};

export {
  searchMovies,
  getMovieDetails,
  getGenres,
  getMoviesByGenre,
  getMoviesByFilter,
  getMovieVideo,
};
