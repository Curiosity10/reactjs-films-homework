import React from 'react';
import { create } from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Table from '..';

describe('Table component renders correctly', () => {
  const movies = [
    {
      title: 'test',
      id: 1,
      genre_ids: [
        {
          id: 12,
          name: 'Action',
        },
        {
          id: 16,
          name: 'Adventure',
        },
      ],
      overview: 'desc',
    },
    {
      title: 'test2',
      id: 2,
      genre_ids: [
        {
          id: 21,
          name: 'Action',
        },
        {
          id: 23,
          name: 'Adventure',
        },
      ],
      overview: 'desc2',
    },
  ];
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
      genreId: null,
      searchQuery: '',
      videoKey: '',
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
