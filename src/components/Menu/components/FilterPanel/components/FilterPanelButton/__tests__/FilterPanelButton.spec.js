import React from 'react';
import { create, act } from 'react-test-renderer';
import FilterPanelButton from '..';

describe('FilterPanel component', () => {
  const activeItem = 'Trending';
  const checkActiveItem = jest.fn();
  const setActive = jest.fn();

  it('FilterPanel component renders correctly', () => {
    const tree = create(<FilterPanelButton activeItem={activeItem} checkActiveItem={checkActiveItem} url="popular" name="Trending" setActive={setActive} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Set active called 1 time', () => {
    const tree = create(<FilterPanelButton activeItem={activeItem} checkActiveItem={checkActiveItem} url="top_rated" name="Top Rated" setActive={setActive} />);
    const button = tree.root.findByProps({ 'aria-label': 'Top Rated' });

    act(() => {
      button.props.onClick();
    });

    expect(setActive.mock.calls.length).toEqual(1);
  });

  it('Set active item called 3 times', () => {
    const tree = create(<FilterPanelButton activeItem={activeItem} checkActiveItem={checkActiveItem} url="upcoming" name="Coming Soon" setActive={setActive} />);
    const button = tree.root.findByProps({ 'aria-label': 'Coming Soon' });

    act(() => {
      button.props.onClick();
    });

    expect(checkActiveItem.mock.calls.length).toEqual(3);
  });
});
