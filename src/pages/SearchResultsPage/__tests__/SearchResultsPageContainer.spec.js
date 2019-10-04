import React from 'react';
import { create } from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import SearchResultsPageContainer from '../SearchResultsPageContainer';

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

  it('SearchResultsPageContainer render correctly', () => {
    const tree = create(
      <StaticRouter location={{ pathname: '/123', search: '?id=1' }}>
        <Provider store={store}>
          <SearchResultsPageContainer location={{ pathname: '/123', search: '?id=1' }} />
        </Provider>
      </StaticRouter>,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
