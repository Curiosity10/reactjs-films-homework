import React from 'react';
import { create } from 'react-test-renderer';
import Genres from '..';
import { getGenres } from '../../../utils/tbdbApiService';

describe('Genres component renders correctly', () => {
  it('Genres renders correctly', () => {
    const genres = getGenres();
    const tree = create(<Genres genres={genres} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
