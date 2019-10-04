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

describe('Fetch movies works correctly', () => {
  it('creates FETCH_MOVIES_SUCCESS when fetching movies has been done', () => {
    fetch.mockResponse(JSON.stringify({ results: [], currentPage: 1, total_pages: 1 }));

    const expectedActions = [
      { type: types.FETCH_MOVIES_REQUEST },
      {
        type: types.FETCH_MOVIES_SUCCESS,
        payload: {
          movies: [],
          currentPage: 1,
          pagesCount: 1,
          genreId: null,
          searchQuery: '',
        },
      },
      {
        type: types.INCREASE_PAGE,
        payload: {
          currentPage: 2,
        },
      },
    ];

    const store = mockStore({ movies: [], currentPage: 2, pagesCount: 1 });
    return store.dispatch(actions.fetchMoviesByFilter(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates FETCH_MOVIES_FAILURE when fetching movies hasn\'t been done', () => {
    fetch.mockReject(new Error('fake error message'));

    const expectedActions = [
      { type: types.FETCH_MOVIES_REQUEST },
      {
        type: types.FETCH_MOVIES_FAILURE,
        payload: { error: 'fake error message' },
      },
    ];

    const store = mockStore({ });
    return store.dispatch(actions.fetchMoviesByFilter()).then(() => {
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
          genreId: 12,
          searchQuery: '',
        },
      },
      {
        type: types.INCREASE_PAGE,
        payload: {
          currentPage: 2,
        },
      },
    ];

    const store = mockStore({ movies: [], currentPage: 1, pagesCount: 1 });
    return store.dispatch(actions.fetchMoviesByGenre(12)).then(() => {
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
          searchQuery: '123',
          genreId: null,
        },
      },
      {
        type: types.INCREASE_PAGE,
        payload: {
          currentPage: 2,
        },
      },
    ];

    const store = mockStore({ movies: [], currentPage: 1, pagesCount: 1 });
    return store.dispatch(actions.fetchSearchMovies('123')).then(() => {
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
        payload: { videoKey: '12345' },
      },
    ];

    const store = mockStore({ videoKey: '' });
    return store.dispatch(actions.fetchVideoKey()).then(() => {
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
    return store.dispatch(actions.fetchVideoKey()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('Change filter works correctly', () => {
  it('Change filter to Trending', () => {
    const filter = 'popular';
    const expectedAction = {
      type: types.CHANGE_FILTER,
      payload: { filter },
    };
    expect(actions.changeFilter(filter)).toEqual(expectedAction);
  });

  it('Change filter without param', () => {
    const expectedAction = {
      type: types.CHANGE_FILTER,
      payload: { filter: 'popular' },
    };
    expect(actions.changeFilter()).toEqual(expectedAction);
  });
});

describe('Fetch movie details works correctly', () => {
  it('creates FETCH_MOVIE_DETAILS_SUCCESS when fetching movie details has been done', () => {
    fetch.mockResponse(JSON.stringify({ title: 'Test' }));

    const expectedActions = [
      { type: types.FETCH_MOVIE_DETAILS_REQUEST },
      {
        type: types.FETCH_MOVIE_DETAILS_SUCCESS,
        payload: {
          movie: { title: 'Test' },
        },
      },
    ];

    const store = mockStore({ movie: {} });

    return store.dispatch(actions.fetchMovieDetails('123')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates FETCH_MOVIE_DETAILS_FAILURE when error in fetch', () => {
    fetch.mockReject(new Error('fake error message'));

    const expectedActions = [
      { type: types.FETCH_MOVIE_DETAILS_REQUEST },
      {
        type: types.FETCH_MOVIE_DETAILS_FAILURE,
        payload: { error: 'fake error message' },
      },
    ];

    const store = mockStore({ });
    return store.dispatch(actions.fetchMovieDetails('123')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
