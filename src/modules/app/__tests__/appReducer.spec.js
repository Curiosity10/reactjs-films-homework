import reducer from '../appReducer';
import * as types from '../appConstants';

describe('App reducer works correctly', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });
  it('should handle failure', () => {
    expect(reducer({}, {
      type: types.FETCH_GENRES_FAILURE,
      error: 'error',
    })).toEqual({
      error: 'error',
      isLoading: false,
    });
  });
  it('should handle request', () => {
    expect(reducer({}, {
      type: types.FETCH_GENRES_REQUEST,
    })).toEqual({
      isLoading: true,
      videoKey: '',
      currentGenre: '',
      currentSearchQuery: '',
    });
  });
  it('should handle movies by filter', () => {
    expect(reducer({}, {
      type: types.FETCH_LATEST_MOVIES_SUCCESS,
      currentPage: 1,
      movies: {},
      currentTotalPages: 1,
    })).toEqual({
      isLoading: false,
      currentPage: 1,
      movies: {},
      currentTotalPages: 1,
    });
  });
  it('should handle movies by filter if current page > 1 ', () => {
    expect(reducer({ movies: { 0: { title: 'first movie', id: 0 } } }, {
      type: types.FETCH_LATEST_MOVIES_SUCCESS,
      currentPage: 2,
      movies: [{ title: 'second movie', id: 1 }],
      currentTotalPages: 2,
    })).toEqual({
      isLoading: false,
      currentPage: 2,
      movies: { 0: { title: 'first movie', id: 0 }, 1: { title: 'second movie', id: 1 } },
      currentTotalPages: 2,
    });
  });
  it('should handle movies by genre', () => {
    expect(reducer({}, {
      type: types.FETCH_MOVIES_BY_GENRE_SUCCESS,
      currentPage: 1,
      movies: {},
      currentTotalPages: 1,
      currentGenre: 12,
    })).toEqual({
      isLoading: false,
      currentPage: 1,
      movies: {},
      currentTotalPages: 1,
      currentGenre: 12,
    });
  });
  it('should handle movies by genre if current page > 1 ', () => {
    expect(reducer({ movies: { 0: { title: 'first movie', id: 0 } } }, {
      type: types.FETCH_MOVIES_BY_GENRE_SUCCESS,
      currentPage: 2,
      movies: [{ title: 'second movie', id: 1 }],
      currentTotalPages: 2,
      currentGenre: 12,
    })).toEqual({
      isLoading: false,
      currentPage: 2,
      movies: { 0: { title: 'first movie', id: 0 }, 1: { title: 'second movie', id: 1 } },
      currentTotalPages: 2,
      currentGenre: 12,
    });
  });
  it('should handle movies by search query', () => {
    expect(reducer({}, {
      type: types.FETCH_SEARCH_MOVIES_SUCCESS,
      currentPage: 1,
      movies: {},
      currentTotalPages: 1,
      currentSearchQuery: '123',
    })).toEqual({
      isLoading: false,
      currentPage: 1,
      movies: {},
      currentTotalPages: 1,
      currentSearchQuery: '123',
    });
  });
  it('should handle movies by search query if current page > 1 ', () => {
    expect(reducer({ movies: { 0: { title: 'first movie', id: 0 } } }, {
      type: types.FETCH_SEARCH_MOVIES_SUCCESS,
      currentPage: 2,
      movies: [{ title: 'second movie', id: 1 }],
      currentTotalPages: 2,
      currentSearchQuery: '123',
    })).toEqual({
      isLoading: false,
      currentPage: 2,
      movies: { 0: { title: 'first movie', id: 0 }, 1: { title: 'second movie', id: 1 } },
      currentTotalPages: 2,
      currentSearchQuery: '123',
    });
  });
  it('should handle genres', () => {
    expect(reducer({}, {
      type: types.FETCH_GENRES_SUCCESS,
      isLoading: false,
      genres: [12, 13, 14],
    })).toEqual({
      isLoading: false,
      genres: [12, 13, 14],
    });
  });
  it('should handle video key', () => {
    expect(reducer({}, {
      type: types.FETCH_VIDEO_KEY_SUCCESS,
      isLoading: false,
      videoKey: '12345',
    })).toEqual({
      isLoading: false,
      videoKey: '12345',
    });
  });
  it('should change filter', () => {
    expect(reducer({}, {
      type: types.CHANGE_FILTER,
      filter: 'Trending',
    })).toEqual({
      filter: 'Trending',
      currentSearchQuery: '',
      currentTotalPages: 1,
      currentPage: 1,
      currentGenre: '',
    });
  });
});
