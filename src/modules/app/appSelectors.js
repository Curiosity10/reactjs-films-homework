import { getMovies } from '../../utils';

export const fetchedGenresSelector = state => state.app.genres;
export const filterSelector = state => state.app.filter;
export const errorMessageSelector = state => state.app.error;
export const currentPageSelector = state => state.app.currentPage;
export const isLoadingSelector = state => state.app.isLoading;
export const currentGenreSelector = state => state.app.currentGenre;
export const currentSearchQuerySelector = state => state.app.currentSearchQuery;
export const srcSelector = state => (state.app.src ? `https://www.youtube.com/embed/${state.app.src}` : '');
export const hasMorePagesSelector = state => state.app.pagesCount > state.app.currentPage;
export const moviesSelector = state => getMovies(state.app.movies, state.app.genres);
