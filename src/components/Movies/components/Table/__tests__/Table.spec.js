import React from 'react';
import { create } from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Table from '..';
import { getMovies } from '../../../../../utils';
import mockMovies from '../../../../../assets/json/popular.json';
import { genres } from '../../../../../assets/json/genres.json';

describe('Table component renders correctly', () => {
  const movies = getMovies(mockMovies.results, genres);
  const middlewares = [];
  const mockStore = configureStore(middlewares);
  const initialState = {
    app: {
      movies: [],
      genres: [],
      isLoading: true,
      currentPage: 1,
      error: false,
      filter: 'Trending',
      currentGenre: '',
      currentSearchQuery: '',
      src: '',
      pagesCount: 1,
    },
    ui: {
      layout: 'table',
    },
  };
  const store = mockStore(initialState);
  it('Table renders correctly', () => {
    const tree = create(
      <Provider store={store}>
        <Table movies={movies} />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
