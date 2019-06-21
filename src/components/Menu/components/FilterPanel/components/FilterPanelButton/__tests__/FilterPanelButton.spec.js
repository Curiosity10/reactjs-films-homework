import React from 'react';
import { create, act } from 'react-test-renderer';
import FilterPanelButton from '..';

describe('FilterPanel component', () => {
  const activeItem = 'Trending';
  const setActiveItem = jest.fn();
  const setActive = jest.fn();
  it('FilterPanel component renders correctly', () => {
    const tree = create(<FilterPanelButton activeItem={activeItem} setActiveItem={setActiveItem} name="Trending" setActive={setActive} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Set active called 1 time', () => {
    const tree = create(<FilterPanelButton activeItem={activeItem} setActiveItem={setActiveItem} name="Top Rated" setActive={setActive} />);
    const button = tree.root.findByProps({ 'aria-label': 'Top Rated' });
    act(() => {
      button.props.onClick();
    });
    expect(setActive.mock.calls.length).toEqual(1);
  });

  it('Set active item called 3 times', () => {
    const tree = create(<FilterPanelButton activeItem={activeItem} setActiveItem={setActiveItem} name="Coming Soon" setActive={setActive} />);
    const button = tree.root.findByProps({ 'aria-label': 'Coming Soon' });
    act(() => {
      button.props.onClick();
    });
    expect(setActiveItem.mock.calls.length).toEqual(3);
  });
});
