import * as selectors from '../appSelectors';
import genres from '../../../assets/json/genres.json';

const state = {
  app: {
    movies: [
      {
        id: 505954,
        image: null,
        overview: 'Test desc',
        vote_average: 4.5,
        title: 'Test',
        poster_path: '/123',
        genre_ids: [
          18,
          12,
        ],
      },
    ],
    genres: genres.genres,
    isLoading: true,
    currentPage: 5,
    error: 'Something went wrong',
    filter: 'Trending',
    genreId: 12,
    searchQuery: '123',
    videoKey: '12345',
    pagesCount: 13,
  },
};

describe('Selectors work correctly', () => {
  it('Should return genres', () => {
    expect(selectors.genresSelector(state)).toEqual(state.app.genres);
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
    expect(selectors.genreIdSelector(state)).toEqual(12);
  });

  it('Should return current search query', () => {
    expect(selectors.searchQuerySelector(state)).toEqual('123');
  });

  it('Should return video key', () => {
    expect(selectors.videoSrcSelector(state)).toEqual('https://www.youtube.com/embed/12345');
  });

  it('Should return has more pages', () => {
    expect(selectors.hasMorePagesSelector(state)).toEqual(true);
  });

  it('Should return movies', () => {
    const movie = [
      {
        id: 505954,
        rating: 4.5,
        title: 'Test',
        genres: [
          {
            id: 12,
            name: 'Adventure',
          },
          {
            id: 18,
            name: 'Drama',
          },
        ],
        overview: 'Test desc',
        image: 'https://image.tmdb.org/t/p/w300/123',
      },
    ];
    expect(selectors.getMoviesSelector(state)).toEqual(movie);
  });

  it('Should return error', () => {
    expect(selectors.errorMessageSelector(state)).toEqual('Something went wrong');
  });
});
