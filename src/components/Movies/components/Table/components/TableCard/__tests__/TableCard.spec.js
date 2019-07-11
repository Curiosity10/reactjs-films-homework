import React from 'react';
import { create, act } from 'react-test-renderer';
import TableCard from '../TableCard';

describe('TableCard component renders correctly', () => {
  const movie = {
    title: 'test',
    id: 1,
    genre_ids: [
      {
        id: 12,
        name: 'Action',
      },
      {
        id: 16,
        name: 'Adventure',
      },
    ],
    overview: 'desc',
  };

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
