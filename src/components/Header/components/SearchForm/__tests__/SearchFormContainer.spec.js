import React from 'react';
import { create } from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import SearchFormContainer from '..';

describe('SearchFormContainer component renders correctly', () => {
  const middlewares = [];
  const mockStore = configureStore(middlewares);
  const initialState = {};
  const store = mockStore(initialState);

  it('SearchFormContainer renders correctly', () => {
    const tree = create(
      <Provider store={store}>
        <StaticRouter>
          <SearchFormContainer />
        </StaticRouter>
      </Provider>,
    )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
