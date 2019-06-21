import {
  getLatestMovies, getTopMovies, getUpcomingMovies,
  getGenres, getMoviesByGenre, searchMovies,
  getMovieVideo, createAsyncFnFailure,
  createAsyncFnRequest,
} from '../../utils';

import * as ACTIONS from './appConstants';

const receiveLatestMovies = (json, page) => ({
  type: ACTIONS.FETCH_LATEST_MOVIES_SUCCESS,
  movies: json.results,
  currentPage: page,
  currentTotalPages: json.total_pages,
});

const receiveTopRatedMovies = (json, page) => ({
  type: ACTIONS.FETCH_TOPRATED_MOVIES_SUCCESS,
  movies: json.results,
  currentPage: page,
  currentTotalPages: json.total_pages,
});

const receiveUpcomingMovies = (json, page) => ({
  type: ACTIONS.FETCH_UPCOMING_MOVIES_SUCCESS,
  movies: json.results,
  currentPage: page,
  currentTotalPages: json.total_pages,
});

const receiveMoviesByGenre = (json, page, genre) => ({
  type: ACTIONS.FETCH_MOVIES_BY_GENRE_SUCCESS,
  movies: json.results,
  currentPage: page,
  currentGenre: genre,
  currentTotalPages: json.total_pages,
});

const receiveSearchedMovies = (json, page, query) => ({
  type: ACTIONS.FETCH_SEARCH_MOVIES_SUCCESS,
  movies: json.results,
  currentPage: page,
  currentSearchQuery: query,
  currentTotalPages: json.total_pages,
});

const receiveVideoSrc = json => ({
  type: ACTIONS.FETCH_VIDEO_KEY_SUCCESS,
  videoKey: json.results[0].key,
});

const receiveGenres = json => ({
  type: ACTIONS.FETCH_GENRES_SUCCESS,
  genres: json.genres,
});

const fetchLatestMovies = page => (dispatch) => {
  dispatch(createAsyncFnRequest(ACTIONS.FETCH_LATEST_MOVIES_REQUEST));
  return getLatestMovies({ page })
    .then(response => response.json())
    .then(json => dispatch(receiveLatestMovies(json, page)))
    .catch(error => dispatch(createAsyncFnFailure(ACTIONS.FETCH_LATEST_MOVIES_FAILURE, error)));
};

const fetchGenres = () => (dispatch) => {
  dispatch(createAsyncFnRequest(ACTIONS.FETCH_GENRES_REQUEST));
  return getGenres()
    .then(response => response.json())
    .then(json => dispatch(receiveGenres(json)))
    .catch(error => dispatch(createAsyncFnFailure(ACTIONS.FETCH_GENRES_FAILURE, error)));
};

const fetchTopRatedMovies = page => (dispatch) => {
  dispatch(createAsyncFnRequest(ACTIONS.FETCH_TOPRATED_MOVIES_REQUEST));
  return getTopMovies({ page })
    .then(response => response.json())
    .then(json => dispatch(receiveTopRatedMovies(json, page)))
    .catch(error => dispatch(createAsyncFnFailure(ACTIONS.FETCH_TOPRATED_MOVIES_FAILURE, error)));
};

const fetchUpcomingMovies = page => (dispatch) => {
  dispatch(createAsyncFnRequest(ACTIONS.FETCH_UPCOMING_MOVIES_REQUEST));
  return getUpcomingMovies({ page })
    .then(response => response.json())
    .then(json => dispatch(receiveUpcomingMovies(json, page)))
    .catch(error => dispatch(createAsyncFnFailure(ACTIONS.FETCH_UPCOMING_MOVIES_FAILURE, error)));
};

const fetchMoviesByGenre = (page, genre) => (dispatch) => {
  dispatch(createAsyncFnRequest(ACTIONS.FETCH_MOVIES_BY_GENRE_REQUEST));
  return getMoviesByGenre({ page, genre })
    .then(response => response.json())
    .then(json => dispatch(receiveMoviesByGenre(json, page, genre)))
    .catch(error => dispatch(createAsyncFnFailure(ACTIONS.FETCH_MOVIES_BY_GENRE_FAILURE, error)));
};

const fetchSearchMovies = (page, query) => (dispatch) => {
  dispatch(createAsyncFnRequest(ACTIONS.FETCH_SEARCH_MOVIES_REQUEST));
  return searchMovies({ page, query })
    .then(response => response.json())
    .then(json => dispatch(receiveSearchedMovies(json, page, query)))
    .catch(error => dispatch(createAsyncFnFailure(ACTIONS.FETCH_SEARCH_MOVIES_FAILURE, error)));
};

const fetchVideoSrc = movieId => (dispatch) => {
  dispatch(createAsyncFnRequest(ACTIONS.FETCH_VIDEO_KEY_REQUEST));
  return getMovieVideo(movieId)
    .then(res => res.json())
    .then(json => dispatch(receiveVideoSrc(json)))
    .catch(error => dispatch(createAsyncFnFailure(ACTIONS.FETCH_VIDEO_KEY_FAILURE, error)));
};


const changeFilter = filter => ({
  type: ACTIONS.CHANGE_FILTER,
  filter,
});

export {
  fetchGenres, fetchLatestMovies,
  fetchTopRatedMovies, fetchUpcomingMovies,
  fetchMoviesByGenre, fetchSearchMovies, changeFilter,
  fetchVideoSrc,
};
