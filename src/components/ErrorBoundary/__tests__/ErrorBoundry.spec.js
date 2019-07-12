import React from 'react';
import { create } from 'react-test-renderer';
import { StaticRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import ErrorBoundary from '..';

describe('ErrorBoundary component renders correctly', () => {
  const middlewares = [];
  const mockStore = configureStore(middlewares);
  const initialState = {
    app: {
      movies: [],
      genres: [],
      isLoading: true,
      currentPage: 1,
      error: '',
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

  it('ErrorBoundary renders correctly', () => {
    const tree = create(
      <StaticRouter location="someLocation">
        <Provider store={store}>
          <ErrorBoundary />
        </Provider>
      </StaticRouter>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('ErrorBoundary catch error correctly', () => {
    const ComponentWithProblem = () => {
      throw new Error('Error thrown from problem child');
      // eslint-disable-next-line no-unreachable
      return <div>Error</div>;
    };
    const tree = create(
      <StaticRouter location="someLocation">
        <Provider store={store}>
          <ErrorBoundary>
            <ComponentWithProblem />
          </ErrorBoundary>
        </Provider>
      </StaticRouter>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
