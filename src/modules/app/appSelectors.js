import { getMovies } from '../../utils';

export const fetchedGenresSelector = state => state.app.genres;
export const filterSelector = state => state.app.filter;
export const currentPageSelector = state => state.app.currentPage;
export const isLoadingSelector = state => state.app.isLoading;
export const currentGenreSelector = state => state.app.currentGenre;
export const currentSearchQuerySelector = state => state.app.currentSearchQuery;
export const videoKeySelector = state => state.app.videoKey;
export const hasMorePagesSelector = state => state.app.currentTotalPages > state.app.currentPage;
export const moviesSelector = state => getMovies(state.app.movies, state.app.genres);
