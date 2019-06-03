import React from 'react';
import renderer from 'react-test-renderer';
import Movies from '..';
import { MovieContextProvider } from '../../MovieContext';

describe('Default Movies component renders correctly', () => {
  it('Grid renders correctly', () => {
    const tree = renderer.create(
      <MovieContextProvider>
        <Movies />
      </MovieContextProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
