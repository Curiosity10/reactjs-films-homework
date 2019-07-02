import React from 'react';
import { create } from 'react-test-renderer';
import NumRating from '..';

describe('NumRating component renders correctly', () => {
  it('NumRating renders correctly', () => {
    const tree = create(<NumRating rating={5} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('NumRating without rating renders correctly', () => {
    const tree = create(<NumRating />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
