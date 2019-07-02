import { createSelector } from 'reselect';
import { getMovies } from '../../utils';

export const genresSelector = state => state.app.genres;
export const filterSelector = state => state.app.filter;
export const errorMessageSelector = state => state.app.error;
export const currentPageSelector = state => state.app.currentPage;
export const pagesCountSelector = state => state.app.pagesCount;
export const isLoadingSelector = state => state.app.isLoading;
export const genreIdSelector = state => state.app.genreId;
export const searchQuerySelector = state => state.app.searchQuery;
export const videoSrcSelector = state => (state.app.videoKey && `https://www.youtube.com/embed/${state.app.videoKey}`);
export const hasMorePagesSelector = createSelector(
  currentPageSelector,
  pagesCountSelector,
  (currentPage, pagesCount) => pagesCount > currentPage,
);
export const moviesSelector = state => state.app.movies;
export const getMoviesSelector = createSelector(
  moviesSelector,
  genresSelector,
  (movies, genres) => getMovies(movies, genres),
);
