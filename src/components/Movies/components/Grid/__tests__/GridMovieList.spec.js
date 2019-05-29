import React from 'react';
import { act, create } from 'react-test-renderer';
import GridMovieList from '..';
import { getMovieInfo } from '../../../../../utils/tbdbApiService';

describe('Grid component renders correctly', () => {
  const movies = [{ ...getMovieInfo(), id: 2 }];

  it('Grid renders correctly', () => {
    const tree = create(<GridMovieList
      movies={movies}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Change active card works correctly', () => {
    const tree = create(<GridMovieList movies={movies} />);
    const mockFunction = jest.fn(tree.toTree().rendered.props.changeActiveCard);
    act(() => {
      mockFunction();
    });
    expect(mockFunction).toHaveBeenCalled();
  });
});
