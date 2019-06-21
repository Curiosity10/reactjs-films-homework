import React from 'react';
import { create } from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import FilterPanelContainer from '..';

describe('FilterPanel component', () => {
  const middlewares = [];
  const mockStore = configureStore(middlewares);
  const initialState = {
    app: {
      genres: [],
    },
  };
  const store = mockStore(initialState);
  it('FilterPanel renders correctly', () => {
    const tree = create(
      <Provider store={store}>
        <FilterPanelContainer />
      </Provider>,
    )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
