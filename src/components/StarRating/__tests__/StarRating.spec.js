import React from 'react';
import { create } from 'react-test-renderer';
import StarRating from '..';

describe('StarRating component renders correctly', () => {
  it('StarRating renders correctly', () => {
    const tree = create(<StarRating starsSelected={5} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
