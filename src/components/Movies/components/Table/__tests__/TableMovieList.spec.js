import React from 'react';
import { create } from 'react-test-renderer';
import TableMovieList from '..';
import { getPopularMovies } from '../../../../../utils/tbdbApiService';

describe('Movies component renders correctly', () => {
  const movies = getPopularMovies();
  it('Table renders correctly', () => {
    const tree = create(<TableMovieList movies={movies} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
