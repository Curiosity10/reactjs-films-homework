import {
  getTopMovies, searchMovies, getGenres, getMoviesByGenre,
  getLatestMovies, getUpcomingMovies, getMovieVideo,
} from './api';
import { getMovies } from './tbdbApiService';
import truncate from './truncate';
import { useFetchOnScroll } from './useFetchOnScroll';
import useBodyScrollLock from './useBodyScrollLock';
import useOnClickOutside from './useOnClickOutside';
import { createAsyncFnFailure, createAsyncFnRequest } from './actions.helpers';

export {
  getTopMovies, searchMovies, getGenres, getMoviesByGenre,
  getLatestMovies, getUpcomingMovies, getMovieVideo,
  truncate, useBodyScrollLock, useOnClickOutside, getMovies,
  createAsyncFnFailure, createAsyncFnRequest, useFetchOnScroll,
};
