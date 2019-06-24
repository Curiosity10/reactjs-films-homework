import {
  getLatestMovies,
  getTopMovies,
  getUpcomingMovies,
  getGenres,
  getMoviesByGenre,
  searchMovies,
  getMovieVideo,
  createAsyncFnFailure,
  createAsyncFnRequest,
  createAsyncFnSuccess,
} from '../../utils';

import * as ACTIONS from './appConstants';

const receiveMoviesByGenre = (data, page, genre) => ({
  type: ACTIONS.FETCH_MOVIES_SUCCESS,
  payload: {
    movies: data.results,
    currentPage: page,
    currentGenre: genre,
    pagesCount: data.total_pages,
  },
});

const receiveSearchedMovies = (data, page, query) => ({
  type: ACTIONS.FETCH_MOVIES_SUCCESS,
  payload: {
    movies: data.results,
    currentPage: page,
    currentSearchQuery: query,
    pagesCount: data.total_pages,
  },
});

const receiveVideoSrc = data => ({
  type: ACTIONS.FETCH_VIDEO_KEY_SUCCESS,
  payload: {
    src: data.results[0].key,
  },
});

const receiveGenres = data => ({
  type: ACTIONS.FETCH_GENRES_SUCCESS,
  payload: {
    genres: data.genres,
  },
});

const requestMovies = () => createAsyncFnRequest(ACTIONS.FETCH_MOVIES_REQUEST);
const failureMovies = error => createAsyncFnFailure(ACTIONS.FETCH_MOVIES_FAILURE, error);

const fetchLatestMovies = page => createAsyncFnSuccess(
  'FETCH_MOVIES', getLatestMovies, page,
);
const fetchTopRatedMovies = page => createAsyncFnSuccess(
  'FETCH_MOVIES', getTopMovies, page,
);
const fetchUpcomingMovies = page => createAsyncFnSuccess(
  'FETCH_MOVIES', getUpcomingMovies, page,
);

const fetchMoviesByGenre = (page, genre) => (dispatch) => {
  dispatch(requestMovies());
  return getMoviesByGenre({ page, genre })
    .then(response => response.json())
    .then(data => dispatch(receiveMoviesByGenre(data, page, genre)))
    .catch(error => dispatch(failureMovies(error)));
};

const fetchSearchMovies = (page, query) => (dispatch) => {
  dispatch(requestMovies());
  return searchMovies({ page, query })
    .then(response => response.json())
    .then(data => dispatch(receiveSearchedMovies(data, page, query)))
    .catch(error => dispatch(failureMovies(error)));
};

const fetchGenres = () => (dispatch) => {
  dispatch(createAsyncFnRequest(ACTIONS.FETCH_GENRES_REQUEST));
  return getGenres()
    .then(response => response.json())
    .then(data => dispatch(receiveGenres(data)))
    .catch(error => dispatch(createAsyncFnFailure(ACTIONS.FETCH_GENRES_FAILURE, error)));
};

const fetchVideoSrc = movieId => (dispatch) => {
  dispatch(createAsyncFnRequest(ACTIONS.FETCH_VIDEO_KEY_REQUEST));
  return getMovieVideo(movieId)
    .then(res => res.json())
    .then(data => dispatch(receiveVideoSrc(data)))
    .catch(error => dispatch(createAsyncFnFailure(ACTIONS.FETCH_VIDEO_KEY_FAILURE, error)));
};


const changeFilter = filter => ({
  type: ACTIONS.CHANGE_FILTER,
  payload: { filter },
});

export {
  fetchGenres,
  fetchLatestMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
  fetchMoviesByGenre,
  fetchSearchMovies,
  changeFilter,
  fetchVideoSrc,
};
