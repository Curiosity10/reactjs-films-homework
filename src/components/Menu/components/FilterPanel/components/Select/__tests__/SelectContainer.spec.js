import React from 'react';
import { create } from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Select from '..';

describe('Select component', () => {
  const middlewares = [];
  const mockStore = configureStore(middlewares);
  const initialState = {
    app: {
      genres: [],
    },
  };
  const store = mockStore(initialState);
  it('Select renders correctly', () => {
    const tree = create(
      <Provider store={store}>
        <Select />
      </Provider>,
    )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
