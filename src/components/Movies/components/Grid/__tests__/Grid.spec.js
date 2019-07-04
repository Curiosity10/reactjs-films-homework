import React from 'react';
import { create, act } from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Grid from '..';

describe('Grid component renders correctly', () => {
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
      layout: 'grid',
    },
  };
  const store = mockStore(initialState);

  it('Grid renders correctly', () => {
    const tree = create(
      <Provider store={store}>
        <Grid movies={movies} />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Change active card called correctly', () => {
    const tree = create(
      <Provider store={store}>
        <Grid movies={movies} />
      </Provider>,
    );
    const mockFunction = jest.fn(tree.toTree().rendered.props.changeActiveCard);

    act(() => {
      mockFunction();
    });

    expect(mockFunction).toHaveBeenCalled();
  });

  it('Change active card works correctly', () => {
    const tree = create(
      <Provider store={store}>
        <Grid movies={movies} />
      </Provider>,
    );

    const mockFunction = jest.fn(
      id => tree.toTree().rendered.rendered[0].props.changeActiveCard(id),
    );

    act(() => {
      mockFunction(123);
    });

    expect(mockFunction).toHaveBeenCalled();
  });
});
