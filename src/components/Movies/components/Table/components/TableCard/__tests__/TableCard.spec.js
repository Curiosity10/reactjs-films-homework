import React from 'react';
import { create, act } from 'react-test-renderer';
import TableCard from '../TableCard';
import { getMovies } from '../../../../../../../utils';
import mockMovies from '../../../../../../../assets/json/popular.json';
import { genres } from '../../../../../../../assets/json/genres.json';

describe('TableCard component renders correctly', () => {
  const movie = { ...getMovies(mockMovies.results, genres)[0], id: 1 };

  it('TableCard renders correctly', () => {
    const tree = create(
      <TableCard
        movie={movie}
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('TableCard watchBtnClick works correctly', () => {
    const tree = create(
      <TableCard
        movie={movie}
      />,
    );

    const watchBtn = tree.root.findByProps({ 'aria-label': 'Watch Now' });
    const mockWatchBtn = jest.fn(watchBtn.props.onClick);

    act(() => {
      mockWatchBtn();
    });

    expect(mockWatchBtn).toHaveBeenCalled();
  });
});
