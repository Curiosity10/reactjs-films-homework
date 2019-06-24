import React from 'react';
import { create } from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import ErrorBoundryContainer from '..';

describe('ErrorBoundry component renders correctly', () => {
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
      currentGenre: '',
      currentSearchQuery: '',
      src: '',
      pagesCount: 1,
    },
    ui: {
      layout: 'grid',
    },
  };
  const store = mockStore(initialState);
  it('ErrorBoundry renders correctly', () => {
    const tree = create(
      <Provider store={store}>
        <ErrorBoundryContainer />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('ErrorBoundry catch error correctly', () => {
    const ComponentWithProblem = () => {
      throw new Error('Error thrown from problem child');
      // eslint-disable-next-line no-unreachable
      return <div>Error</div>;
    };
    const tree = create(
      <Provider store={store}>
        <ErrorBoundryContainer>
          <ComponentWithProblem />
        </ErrorBoundryContainer>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
