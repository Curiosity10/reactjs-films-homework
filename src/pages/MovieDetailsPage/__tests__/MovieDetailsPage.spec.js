import React from 'react';
import { create } from 'react-test-renderer';
import MovieDetailsPage from '..';

describe('MovieDetailsPage renders correctly', () => {
  it('MovieDetailsPage renders correctly', () => {
    const tree = create(<MovieDetailsPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
