import {
  getLatestMovies,
  getTopMovies,
  getUpcomingMovies,
  getGenres,
  getMoviesByGenre,
  searchMovies,
  getMovieVideo,
  createFailureAction,
  createRequestAction,
  createAsyncAction,
} from '../../utils';

import * as ACTIONS from './appConstants';

const fetchLatestMovies = page => createAsyncAction({
  type: ACTIONS.FETCH_MOVIES, asyncFn: getLatestMovies, page,
});
const fetchTopRatedMovies = page => createAsyncAction({
  type: ACTIONS.FETCH_MOVIES, asyncFn: getTopMovies, page,
});
const fetchUpcomingMovies = page => createAsyncAction({
  type: ACTIONS.FETCH_MOVIES, asyncFn: getUpcomingMovies, page,
});
const fetchMoviesByGenre = (page, genre) => createAsyncAction({
  type: ACTIONS.FETCH_MOVIES, asyncFn: getMoviesByGenre, page, genre,
});
const fetchSearchMovies = (page, query) => createAsyncAction({
  type: ACTIONS.FETCH_MOVIES, asyncFn: searchMovies, page, query,
});

const receivevideoKey = data => ({
  type: ACTIONS.FETCH_VIDEO_KEY_SUCCESS,
  payload: {
    videoKey: data.results[0].key,
  },
});

const receiveGenres = data => ({
  type: ACTIONS.FETCH_GENRES_SUCCESS,
  payload: {
    genres: data.genres,
  },
});

const fetchGenres = () => (dispatch) => {
  dispatch(createRequestAction(ACTIONS.FETCH_GENRES_REQUEST));
  return getGenres()
    .then(response => response.json())
    .then(data => dispatch(receiveGenres(data)))
    .catch(error => dispatch(createFailureAction(ACTIONS.FETCH_GENRES_FAILURE, error)));
};

const fetchvideoKey = movieId => (dispatch) => {
  dispatch(createRequestAction(ACTIONS.FETCH_VIDEO_KEY_REQUEST));
  return getMovieVideo(movieId)
    .then(res => res.json())
    .then(data => dispatch(receivevideoKey(data)))
    .catch(error => dispatch(createFailureAction(ACTIONS.FETCH_VIDEO_KEY_FAILURE, error)));
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
  fetchvideoKey,
};
