import {
  getTopMovies,
  searchMovies,
  getGenres,
  getMoviesByGenre,
  getLatestMovies,
  getUpcomingMovies,
  getMovieVideo,
} from './api';
import { getMovies } from './tbdbApiService';
import truncate from './truncate';
import {
  createFailureAction,
  createRequestAction,
  createAsyncAction,
  createReceiveMoviesAction,
} from './actions.helpers';

export {
  getTopMovies,
  searchMovies,
  getGenres,
  getMoviesByGenre,
  getLatestMovies,
  getUpcomingMovies,
  getMovieVideo,
  truncate,
  getMovies,
  createFailureAction,
  createRequestAction,
  createAsyncAction,
  createReceiveMoviesAction,
};
