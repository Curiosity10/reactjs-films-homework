import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../appActions';
import * as types from '../appConstants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
global.fetch = require('jest-fetch-mock');

describe('Fetch genres works correctly', () => {
  it('creates FETCH_GENRES_SUCCESS when fetching genres has been done', () => {
    fetch.mockResponse(JSON.stringify({ genres: [] }));
    const expectedActions = [
      { type: types.FETCH_GENRES_REQUEST },
      { type: types.FETCH_GENRES_SUCCESS, payload: { genres: [] } },
    ];
    const store = mockStore({ genres: [] });
    return store.dispatch(actions.fetchGenres()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('creates FETCH_GENRES_FAILURE when fetching genres hasn\'t been done', () => {
    fetch.mockReject(new Error('fake error message'));
    const expectedActions = [
      { type: types.FETCH_GENRES_REQUEST },
      { type: types.FETCH_GENRES_FAILURE, payload: { error: 'fake error message' } },
    ];
    const store = mockStore({ });
    return store.dispatch(actions.fetchGenres()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('Fetch latest movies works correctly', () => {
  it('creates FETCH_LATEST_MOVIES_SUCCESS when fetching movies has been done', () => {
    fetch.mockResponse(JSON.stringify({ results: [], currentPage: 1, total_pages: 1 }));
    const expectedActions = [
      { type: types.FETCH_MOVIES_REQUEST },
      {
        type: types.FETCH_MOVIES_SUCCESS,
        payload: {
          movies: [],
          currentPage: 1,
          pagesCount: 1,
          currentGenre: null,
          currentSearchQuery: '',
        },
      },
    ];
    const store = mockStore({ movies: [], currentPage: 1, pagesCount: 1 });
    return store.dispatch(actions.fetchLatestMovies(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('creates FETCH_LATEST_MOVIES_FAILURE when fetching movies hasn\'t been done', () => {
    fetch.mockReject(new Error('fake error message'));
    const expectedActions = [
      { type: types.FETCH_MOVIES_REQUEST },
      {
        type: types.FETCH_MOVIES_FAILURE,
        payload: { error: 'fake error message' },
      },
    ];
    const store = mockStore({ });
    return store.dispatch(actions.fetchLatestMovies()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('Fetch top rated movies works correctly', () => {
  it('creates FETCH_TOPRATED_MOVIES_SUCCESS when fetching movies has been done', () => {
    fetch.mockResponse(JSON.stringify({ results: [], currentPage: 1, total_pages: 1 }));
    const expectedActions = [
      { type: types.FETCH_MOVIES_REQUEST },
      {
        type: types.FETCH_MOVIES_SUCCESS,
        payload: {
          movies: [],
          currentPage: 1,
          pagesCount: 1,
          currentGenre: null,
          currentSearchQuery: '',
        },
      },
    ];
    const store = mockStore({ movies: [], currentPage: 1, pagesCount: 1 });
    return store.dispatch(actions.fetchTopRatedMovies(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('creates FETCH_TOPRATED_MOVIES_FAILURE when fetching movies hasn\'t been done', () => {
    fetch.mockReject(new Error('fake error message'));
    const expectedActions = [
      { type: types.FETCH_MOVIES_REQUEST },
      {
        type: types.FETCH_MOVIES_FAILURE,
        payload: { error: 'fake error message' },
      },
    ];
    const store = mockStore({ });
    return store.dispatch(actions.fetchTopRatedMovies()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('Fetch upcoming movies works correctly', () => {
  it('creates FETCH_UPCOMING_MOVIES_SUCCESS when fetching movies has been done', () => {
    fetch.mockResponse(JSON.stringify({ results: [], currentPage: 1, total_pages: 1 }));
    const expectedActions = [
      { type: types.FETCH_MOVIES_REQUEST },
      {
        type: types.FETCH_MOVIES_SUCCESS,
        payload: {
          movies: [],
          currentPage: 1,
          pagesCount: 1,
          currentGenre: null,
          currentSearchQuery: '',
        },
      },
    ];
    const store = mockStore({ movies: [], currentPage: 1, pagesCount: 1 });
    return store.dispatch(actions.fetchUpcomingMovies(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('creates FETCH_UPCOMING_MOVIES_FAILURE when fetching movies hasn\'t been done', () => {
    fetch.mockReject(new Error('fake error message'));
    const expectedActions = [
      { type: types.FETCH_MOVIES_REQUEST },
      {
        type: types.FETCH_MOVIES_FAILURE,
        payload: { error: 'fake error message' },
      },
    ];
    const store = mockStore({ });
    return store.dispatch(actions.fetchUpcomingMovies()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('Fetch movies by genre works correctly', () => {
  it('creates FETCH_MOVIES_BY_GENRE_SUCCESS when fetching movies has been done', () => {
    fetch.mockResponse(JSON.stringify({ results: [], currentPage: 1, total_pages: 1 }));
    const expectedActions = [
      { type: types.FETCH_MOVIES_REQUEST },
      {
        type: types.FETCH_MOVIES_SUCCESS,
        payload: {
          movies: [],
          currentPage: 1,
          pagesCount: 1,
          currentGenre: 12,
          currentSearchQuery: '',
        },
      },
    ];
    const store = mockStore({ movies: [], currentPage: 1, pagesCount: 1 });
    return store.dispatch(actions.fetchMoviesByGenre(1, 12)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('creates FETCH_MOVIES_BY_GENRE_FAILURE when fetching movies hasn\'t been done', () => {
    fetch.mockReject(new Error('fake error message'));
    const expectedActions = [
      { type: types.FETCH_MOVIES_REQUEST },
      {
        type: types.FETCH_MOVIES_FAILURE,
        payload: { error: 'fake error message' },
      },
    ];
    const store = mockStore({ });
    return store.dispatch(actions.fetchMoviesByGenre()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('Fetch movies by search query works correctly', () => {
  it('creates FETCH_SEARCH_MOVIES_SUCCESS when fetching movies has been done', () => {
    fetch.mockResponse(JSON.stringify({ results: [], currentPage: 1, total_pages: 1 }));
    const expectedActions = [
      { type: types.FETCH_MOVIES_REQUEST },
      {
        type: types.FETCH_MOVIES_SUCCESS,
        payload: {
          movies: [],
          currentPage: 1,
          pagesCount: 1,
          currentSearchQuery: '123',
          currentGenre: null,
        },
      },
    ];
    const store = mockStore({ movies: [], currentPage: 1, pagesCount: 1 });
    return store.dispatch(actions.fetchSearchMovies(1, '123')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('creates FETCH_SEARCH_MOVIES_FAILURE when fetching movies hasn\'t been done', () => {
    fetch.mockReject(new Error('fake error message'));
    const expectedActions = [
      { type: types.FETCH_MOVIES_REQUEST },
      {
        type: types.FETCH_MOVIES_FAILURE,
        payload: { error: 'fake error message' },
      },
    ];
    const store = mockStore({ });
    return store.dispatch(actions.fetchSearchMovies()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('Fetch src works correctly', () => {
  it('creates FETCH_VIDEO_KEY_SUCCESS when fetching src has been done', () => {
    fetch.mockResponse(JSON.stringify({ results: [{ key: '12345' }] }));
    const expectedActions = [
      { type: types.FETCH_VIDEO_KEY_REQUEST },
      {
        type: types.FETCH_VIDEO_KEY_SUCCESS,
        payload: { src: '12345' },
      },
    ];
    const store = mockStore({ src: '' });
    return store.dispatch(actions.fetchVideoSrc()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('creates FETCH_VIDEO_KEY_FAILURE when fetching src hasn\'t been done', () => {
    fetch.mockReject(new Error('fake error message'));
    const expectedActions = [
      { type: types.FETCH_VIDEO_KEY_REQUEST },
      {
        type: types.FETCH_VIDEO_KEY_FAILURE,
        payload: { error: 'fake error message' },
      },
    ];
    const store = mockStore({ });
    return store.dispatch(actions.fetchVideoSrc()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('Change filter works correctly', () => {
  it('Change filter to Trending', () => {
    const filter = 'Trending';
    const expectedAction = {
      type: types.CHANGE_FILTER,
      payload: { filter },
    };
    expect(actions.changeFilter(filter)).toEqual(expectedAction);
  });
});
