import React from 'react';
import { create, act } from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import MoviesContainer from '..';
import { results } from '../../../assets/json/popular.json';
import { genres } from '../../../assets/json/genres.json';
import { getMovies } from '../../../utils/tbdbApiService';

global.fetch = require('jest-fetch-mock');

describe('MoviesContainer component renders correctly', () => {
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn(element => element);
  });
  afterEach(() => {
    ReactDOM.createPortal.mockClear();
  });
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const movies = getMovies(results, genres);
  it('MoviesContainer grid render and unmount correctly', () => {
    const initialState = {
      app: {
        movies,
        genres,
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
    };
    const store = mockStore(initialState);
    let tree;
    act(() => {
      tree = create(
        <Provider store={store}>
          <MoviesContainer />
        </Provider>,
      );
    });
    expect(tree.toJSON()).toMatchSnapshot();
    tree.unmount();
  });
  it('MoviesContainer table render correctly', () => {
    const initialState = {
      app: {
        movies,
        genres,
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
        layout: 'table',
      },
    };
    const store = mockStore(initialState);
    const tree = create(
      <Provider store={store}>
        <MoviesContainer />
      </Provider>,
    );
    const button = tree.root.findAllByProps({ 'aria-label': 'Watch Now' })[0];
    const mockFn = jest.fn(button.props.onClick);
    act(() => {
      mockFn();
    });
    expect(mockFn).toHaveBeenCalled();
    expect(tree.toJSON()).toMatchSnapshot();
  });
  it('MoviesContainer without layout', () => {
    const initialState = {
      app: {
        movies,
        genres,
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
        layout: '',
      },
    };
    const store = mockStore(initialState);
    const tree = create(
      <Provider store={store}>
        <MoviesContainer />
      </Provider>,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
  it('MoviesContainer without movies table render correctly', () => {
    const initialState = {
      app: {
        movies: [],
        genres,
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
        layout: 'table',
      },
    };
    const store = mockStore(initialState);
    let tree;
    act(() => {
      tree = create(
        <Provider store={store}>
          <MoviesContainer />
        </Provider>,
      );
    });
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
