import React from 'react';
import { create, act } from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import SearchResultsPage from '../SearchResultsPage';

describe('SearchResultsPage renders correctly', () => {
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

  it('SearchResultsPage render correctly', () => {
    const tree = create(
      <StaticRouter location="someLocation">
        <Provider store={store}>
          <SearchResultsPage />
        </Provider>
      </StaticRouter>,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Fetch data calls correctly', () => {
    const mockFn = jest.fn();

    let tree;

    act(() => {
      tree = create(
        <StaticRouter location="someLocation">
          <Provider store={store}>
            <SearchResultsPage fetchData={mockFn} />
          </Provider>
        </StaticRouter>,
      );
    });

    expect(mockFn).toHaveBeenCalled();
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
