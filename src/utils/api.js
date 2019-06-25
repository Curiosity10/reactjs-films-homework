const MOVIE_DB_API_KEY = 'ed98d25919802b5020e8feb6c3923886';
const MOVIE_DB_BASE_URL = 'https://api.themoviedb.org/3';

const createMovieDbUrl = (relativeUrl, queryParams) => {
  let baseUrl = `${MOVIE_DB_BASE_URL}${relativeUrl}?api_key=${MOVIE_DB_API_KEY}&language=en-US`;
  if (queryParams) {
    Object.keys(queryParams)
      .forEach((paramName) => {
        baseUrl += `&${paramName}=${queryParams[paramName]}`;
        return baseUrl;
      });
  }
  return baseUrl;
};

const getLatestMovies = ({ page }) => {
  const fullUrl = createMovieDbUrl('/movie/popular', {
    page,
  });
  return fetch(fullUrl);
};

const getTopMovies = ({ page }) => {
  const fullUrl = createMovieDbUrl('/movie/top_rated', {
    page,
  });
  return fetch(fullUrl);
};

const getUpcomingMovies = ({ page }) => {
  const fullUrl = createMovieDbUrl('/movie/upcoming', {
    page,
  });
  return fetch(fullUrl);
};

const searchMovies = ({ page, query }) => {
  const fullUrl = `${createMovieDbUrl('/search/movie', {
    page,
    query,
  })}&include_adult=false`;
  return fetch(fullUrl);
};

const getGenres = () => {
  const fullUrl = createMovieDbUrl('/genre/movie/list');
  return fetch(fullUrl);
};

const getMoviesByGenre = ({ page, genre }) => {
  const fullUrl = `${createMovieDbUrl('/discover/movie', {
    page,
  })}&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=${genre}`;
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
  getTopMovies,
  searchMovies,
  getMovieDetails,
  getGenres,
  getMoviesByGenre,
  getLatestMovies,
  getUpcomingMovies,
  getMovieVideo,
};
