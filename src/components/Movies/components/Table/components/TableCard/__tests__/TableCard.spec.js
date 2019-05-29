import React from 'react';
import { create } from 'react-test-renderer';
import TableCard from '../index';
import { getMovieInfo } from '../../../../../../../utils/tbdbApiService';

describe('TableCard component renders correctly', () => {
  const movie = { ...getMovieInfo() };

  it('TableCard renders correctly', () => {
    const tree = create(
      <TableCard
        movie={movie}
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
