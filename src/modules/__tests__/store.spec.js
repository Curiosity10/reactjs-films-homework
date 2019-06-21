import store from '../store';

describe('Store works correctly', () => {
  it('Initial store works correctly', () => {
    expect(store.getState()).toEqual(
      {
        app: {
          movies: {},
          genres: [],
          isLoading: true,
          currentPage: 1,
          error: false,
          filter: 'Trending',
          currentGenre: '',
          currentSearchQuery: '',
          videoKey: '',
          currentTotalPages: 1,
        },
        ui: {
          layout: 'grid',
        },
      },
    );
  });
});
