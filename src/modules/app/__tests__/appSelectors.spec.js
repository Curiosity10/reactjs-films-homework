import * as selectors from '../appSelectors';
import movies from '../../../assets/json/popular.json';
import genres from '../../../assets/json/genres.json';
import { getMovies } from '../../../utils/tbdbApiService';

const state = {
  app: {
    movies: movies.results,
    genres: genres.genres,
    isLoading: true,
    currentPage: 5,
    error: false,
    filter: 'Trending',
    currentGenre: 12,
    currentSearchQuery: '123',
    videoKey: '12345',
    currentTotalPages: 13,
  },
};
describe('Selectors work correctly', () => {
  it('Should return genres', () => {
    expect(selectors.fetchedGenresSelector(state)).toEqual(state.app.genres);
  });
  it('Should return filter', () => {
    expect(selectors.filterSelector(state)).toEqual('Trending');
  });
  it('Should return current page', () => {
    expect(selectors.currentPageSelector(state)).toEqual(5);
  });
  it('Should return isLoading', () => {
    expect(selectors.isLoadingSelector(state)).toEqual(true);
  });
  it('Should return current genre', () => {
    expect(selectors.currentGenreSelector(state)).toEqual(12);
  });
  it('Should return current search query', () => {
    expect(selectors.currentSearchQuerySelector(state)).toEqual('123');
  });
  it('Should return video key', () => {
    expect(selectors.videoKeySelector(state)).toEqual('12345');
  });
  it('Should return has more pages', () => {
    expect(selectors.hasMorePagesSelector(state)).toEqual(true);
  });
  it('Should return movies', () => {
    expect(selectors.moviesSelector(state)).toEqual(getMovies(state.app.movies, state.app.genres));
  });
});
