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
      { type: types.FETCH_GENRES_SUCCESS, genres: [] },
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
      { type: types.FETCH_GENRES_FAILURE, error: 'fake error message' },
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
      { type: types.FETCH_LATEST_MOVIES_REQUEST },
      {
        type: types.FETCH_LATEST_MOVIES_SUCCESS, movies: [], currentPage: 1, currentTotalPages: 1,
      },
    ];
    const store = mockStore({ movies: [], currentPage: 1, currentTotalPages: 1 });
    return store.dispatch(actions.fetchLatestMovies(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('creates FETCH_LATEST_MOVIES_FAILURE when fetching movies hasn\'t been done', () => {
    fetch.mockReject(new Error('fake error message'));
    const expectedActions = [
      { type: types.FETCH_LATEST_MOVIES_REQUEST },
      { type: types.FETCH_LATEST_MOVIES_FAILURE, error: 'fake error message' },
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
      { type: types.FETCH_TOPRATED_MOVIES_REQUEST },
      {
        type: types.FETCH_TOPRATED_MOVIES_SUCCESS, movies: [], currentPage: 1, currentTotalPages: 1,
      },
    ];
    const store = mockStore({ movies: [], currentPage: 1, currentTotalPages: 1 });
    return store.dispatch(actions.fetchTopRatedMovies(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('creates FETCH_TOPRATED_MOVIES_FAILURE when fetching movies hasn\'t been done', () => {
    fetch.mockReject(new Error('fake error message'));
    const expectedActions = [
      { type: types.FETCH_TOPRATED_MOVIES_REQUEST },
      { type: types.FETCH_TOPRATED_MOVIES_FAILURE, error: 'fake error message' },
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
      { type: types.FETCH_UPCOMING_MOVIES_REQUEST },
      {
        type: types.FETCH_UPCOMING_MOVIES_SUCCESS, movies: [], currentPage: 1, currentTotalPages: 1,
      },
    ];
    const store = mockStore({ movies: [], currentPage: 1, currentTotalPages: 1 });
    return store.dispatch(actions.fetchUpcomingMovies(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('creates FETCH_UPCOMING_MOVIES_FAILURE when fetching movies hasn\'t been done', () => {
    fetch.mockReject(new Error('fake error message'));
    const expectedActions = [
      { type: types.FETCH_UPCOMING_MOVIES_REQUEST },
      { type: types.FETCH_UPCOMING_MOVIES_FAILURE, error: 'fake error message' },
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
      { type: types.FETCH_MOVIES_BY_GENRE_REQUEST },
      {
        type: types.FETCH_MOVIES_BY_GENRE_SUCCESS,
        movies: [],
        currentPage: 1,
        currentTotalPages: 1,
        currentGenre: 12,
      },
    ];
    const store = mockStore({ movies: [], currentPage: 1, currentTotalPages: 1 });
    return store.dispatch(actions.fetchMoviesByGenre(1, 12)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('creates FETCH_MOVIES_BY_GENRE_FAILURE when fetching movies hasn\'t been done', () => {
    fetch.mockReject(new Error('fake error message'));
    const expectedActions = [
      { type: types.FETCH_MOVIES_BY_GENRE_REQUEST },
      { type: types.FETCH_MOVIES_BY_GENRE_FAILURE, error: 'fake error message' },
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
      { type: types.FETCH_SEARCH_MOVIES_REQUEST },
      {
        type: types.FETCH_SEARCH_MOVIES_SUCCESS,
        movies: [],
        currentPage: 1,
        currentTotalPages: 1,
        currentSearchQuery: '123',
      },
    ];
    const store = mockStore({ movies: [], currentPage: 1, currentTotalPages: 1 });
    return store.dispatch(actions.fetchSearchMovies(1, '123')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('creates FETCH_SEARCH_MOVIES_FAILURE when fetching movies hasn\'t been done', () => {
    fetch.mockReject(new Error('fake error message'));
    const expectedActions = [
      { type: types.FETCH_SEARCH_MOVIES_REQUEST },
      { type: types.FETCH_SEARCH_MOVIES_FAILURE, error: 'fake error message' },
    ];
    const store = mockStore({ });
    return store.dispatch(actions.fetchSearchMovies()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('Fetch videoKey works correctly', () => {
  it('creates FETCH_VIDEO_KEY_SUCCESS when fetching videoKey has been done', () => {
    fetch.mockResponse(JSON.stringify({ results: [{ key: '12345' }] }));
    const expectedActions = [
      { type: types.FETCH_VIDEO_KEY_REQUEST },
      { type: types.FETCH_VIDEO_KEY_SUCCESS, videoKey: '12345' },
    ];
    const store = mockStore({ videoKey: '' });
    return store.dispatch(actions.fetchVideoSrc()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('creates FETCH_VIDEO_KEY_FAILURE when fetching videoKey hasn\'t been done', () => {
    fetch.mockReject(new Error('fake error message'));
    const expectedActions = [
      { type: types.FETCH_VIDEO_KEY_REQUEST },
      { type: types.FETCH_VIDEO_KEY_FAILURE, error: 'fake error message' },
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
      filter,
    };
    expect(actions.changeFilter(filter)).toEqual(expectedAction);
  });
});
