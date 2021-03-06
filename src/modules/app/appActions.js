import {
  createFailureAction,
  createRequestAction,
  createAsyncReceiveMoviesAction,
} from './helpers/actions.helpers';
import {
  getGenres,
  getMoviesByGenre,
  getMoviesByFilter,
  getMovieDetails,
  searchMovies,
  getMovieVideo,
} from './helpers/api.helpers';

import * as ACTIONS from './appConstants';

const fetchMoviesByFilter = () => createAsyncReceiveMoviesAction({
  type: ACTIONS.FETCH_MOVIES, asyncFn: getMoviesByFilter,
});

const fetchMoviesByGenre = genre => createAsyncReceiveMoviesAction({
  type: ACTIONS.FETCH_MOVIES, asyncFn: getMoviesByGenre, genre,
});

const fetchSearchMovies = query => createAsyncReceiveMoviesAction({
  type: ACTIONS.FETCH_MOVIES, asyncFn: searchMovies, query,
});

const receiveVideoKey = data => ({
  type: ACTIONS.FETCH_VIDEO_KEY_SUCCESS,
  payload: {
    videoKey: data.results[0].key,
  },
});

const receiveMovieDetails = data => ({
  type: ACTIONS.FETCH_MOVIE_DETAILS_SUCCESS,
  payload: {
    movie: data,
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

const fetchVideoKey = movieId => (dispatch) => {
  dispatch(createRequestAction(ACTIONS.FETCH_VIDEO_KEY_REQUEST));

  return getMovieVideo(movieId)
    .then(res => res.json())
    .then(data => dispatch(receiveVideoKey(data)))
    .catch(error => dispatch(createFailureAction(ACTIONS.FETCH_VIDEO_KEY_FAILURE, error)));
};

const fetchMovieDetails = movieId => (dispatch) => {
  dispatch(createRequestAction(ACTIONS.FETCH_MOVIE_DETAILS_REQUEST));
  return getMovieDetails(movieId)
    .then(res => res.json())
    .then(data => dispatch(receiveMovieDetails(data)))
    .catch(error => dispatch(createFailureAction(ACTIONS.FETCH_MOVIE_DETAILS_FAILURE, error)));
};

const changeFilter = (filter = 'popular') => ({
  type: ACTIONS.CHANGE_FILTER,
  payload: { filter },
});

export {
  fetchGenres,
  fetchMoviesByFilter,
  fetchMoviesByGenre,
  fetchMovieDetails,
  fetchSearchMovies,
  changeFilter,
  fetchVideoKey,
};
