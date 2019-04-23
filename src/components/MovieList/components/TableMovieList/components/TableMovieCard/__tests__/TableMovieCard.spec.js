import React from 'react';
import { create } from 'react-test-renderer';
import TableMovieCard from '../index';
import { getMovieInfo } from '../../../../../../../utils/tbdbApiService';

describe('TableMovieCard component renders correctly', () => {
  const movie = { ...getMovieInfo() };

  it('TableMovieCard renders correctly', () => {
    const tree = create(
      <TableMovieCard
        movie={movie}
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
