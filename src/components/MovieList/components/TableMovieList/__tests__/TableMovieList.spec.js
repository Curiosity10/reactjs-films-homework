import React from 'react';
import { create } from 'react-test-renderer';
import TableMovieList from '..';
import { getPopularMovies } from '../../../../../utils/tbdbApiService';

describe('MovieList component renders correctly', () => {
  const movies = getPopularMovies();
  it('TableMovieList renders correctly', () => {
    const tree = create(<TableMovieList movies={movies} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
