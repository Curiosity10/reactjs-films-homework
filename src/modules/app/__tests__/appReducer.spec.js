import reducer from '../appReducer';
import * as types from '../appConstants';

describe('App reducer works correctly', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('should handle failure', () => {
    expect(reducer({}, {
      type: types.FETCH_GENRES_FAILURE,
      payload: { error: 'error' },
    })).toEqual({
      error: 'error',
      isLoading: false,
      videoKey: '',
    });
  });

  it('should handle videoKey failure', () => {
    expect(reducer({}, {
      type: types.FETCH_VIDEO_KEY_FAILURE,
    })).toEqual({
      error: '',
      isLoading: false,
      videoKey: '',
    });
  });

  it('should handle request', () => {
    expect(reducer({}, {
      type: types.FETCH_GENRES_REQUEST,
    })).toEqual({
      isLoading: true,
      videoKey: '',
      error: '',
    });
  });

  it('should handle movies by filter', () => {
    expect(reducer({}, {
      type: types.FETCH_MOVIES_SUCCESS,
      payload: {
        currentPage: 1,
        movies: [],
        pagesCount: 1,
      },
    })).toEqual({
      isLoading: false,
      currentPage: 1,
      movies: [],
      pagesCount: 1,
    });
  });

  it('should handle movies by filter if current page > 1 ', () => {
    expect(reducer({ movies: [{ title: 'first movie', id: 1 }] }, {
      type: types.FETCH_MOVIES_SUCCESS,
      payload: {
        currentPage: 2,
        movies: [{ title: 'second movie', id: 2 }],
        pagesCount: 2,
      },
    })).toEqual({
      isLoading: false,
      currentPage: 2,
      movies: [{ title: 'first movie', id: 1 }, { title: 'second movie', id: 2 }],
      pagesCount: 2,
      genreId: undefined,
      searchQuery: undefined,
    });
  });

  it('should handle movies by filter if current page > 1 && same ID ', () => {
    expect(reducer({ movies: [{ title: 'first movie', id: 1 }] }, {
      type: types.FETCH_MOVIES_SUCCESS,
      payload: {
        currentPage: 2,
        movies: [{ title: 'second movie', id: 1 }],
        pagesCount: 2,
      },
    })).toEqual({
      isLoading: false,
      currentPage: 2,
      movies: [{ title: 'first movie', id: 1 }],
      pagesCount: 2,
      genreId: undefined,
      searchQuery: undefined,
    });
  });

  it('should handle movies by genre', () => {
    expect(reducer({}, {
      type: types.FETCH_MOVIES_SUCCESS,
      payload: {
        currentPage: 1,
        movies: [],
        pagesCount: 1,
        genreId: 12,
      },
    })).toEqual({
      isLoading: false,
      currentPage: 1,
      movies: [],
      pagesCount: 1,
      genreId: 12,
    });
  });

  it('should handle movies by genre if current page > 1 ', () => {
    expect(reducer({ movies: [{ title: 'first movie', id: 1 }] }, {
      type: types.FETCH_MOVIES_SUCCESS,
      payload: {
        currentPage: 2,
        movies: [{ title: 'second movie', id: 2 }],
        pagesCount: 2,
        genreId: 12,
      },
    })).toEqual({
      isLoading: false,
      currentPage: 2,
      movies: [{ title: 'first movie', id: 1 }, { title: 'second movie', id: 2 }],
      pagesCount: 2,
      genreId: 12,
      searchQuery: undefined,
    });
  });

  it('should handle movies by search query', () => {
    expect(reducer({}, {
      type: types.FETCH_MOVIES_SUCCESS,
      payload: {
        currentPage: 1,
        movies: [],
        pagesCount: 1,
        searchQuery: '123',
      },
    })).toEqual({
      isLoading: false,
      currentPage: 1,
      movies: [],
      pagesCount: 1,
      searchQuery: '123',
    });
  });

  it('should handle movies by search query if current page > 1 ', () => {
    expect(reducer({ movies: [{ title: 'first movie', id: 1 }] }, {
      type: types.FETCH_MOVIES_SUCCESS,
      payload: {
        currentPage: 2,
        movies: [{ title: 'second movie', id: 2 }],
        pagesCount: 2,
        searchQuery: '123',
      },
    })).toEqual({
      isLoading: false,
      currentPage: 2,
      movies: [{ title: 'first movie', id: 1 }, { title: 'second movie', id: 2 }],
      pagesCount: 2,
      searchQuery: '123',
      genreId: undefined,
    });
  });

  it('should handle genres', () => {
    expect(reducer({}, {
      type: types.FETCH_GENRES_SUCCESS,
      payload: {
        genres: [12, 13, 14],
      },
    })).toEqual({
      genres: [12, 13, 14],
    });
  });

  it('should handle video key', () => {
    expect(reducer({}, {
      type: types.FETCH_VIDEO_KEY_SUCCESS,
      payload: {
        isLoading: false,
        videoKey: '12345',
      },
    })).toEqual({
      isLoading: false,
      videoKey: '12345',
    });
  });

  it('should change filter', () => {
    expect(reducer({}, {
      type: types.CHANGE_FILTER,
      payload: { filter: 'Trending' },
    })).toEqual({
      filter: 'Trending',
      searchQuery: '',
      pagesCount: 1,
      currentPage: 1,
      genreId: null,
    });
  });

  it('should increase page by 1', () => {
    expect(reducer({}, {
      type: types.INCREASE_PAGE,
      payload: { currentPage: 2 },
    })).toEqual({
      currentPage: 2,
    });
  });
});
