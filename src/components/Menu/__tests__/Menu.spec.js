import React from 'react';
import { create } from 'react-test-renderer';
import Menu from '..';
import { MovieContextProvider } from '../../MovieContext';

describe('Menu component renders correctly', () => {
  it('Menu renders correctly', () => {
    const tree = create(
      <MovieContextProvider>
        <Menu />
      </MovieContextProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
