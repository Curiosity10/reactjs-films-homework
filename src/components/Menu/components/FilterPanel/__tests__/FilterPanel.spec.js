import React from 'react';
import { create, act } from 'react-test-renderer';
import FilterPanel from '..';

describe('FilterPanel component', () => {
  it('Trending button set active', () => {
    const tree = create(<FilterPanel />);
    const button = tree.root.findByProps({ 'aria-label': 'Trending' });
    act(() => {
      button.props.onClick();
    });
    expect(button.props.className).toEqual('navItem_btn navItem_btn__active');
  });

  it('Top Rated button set active', () => {
    const tree = create(<FilterPanel />);
    const button = tree.root.findByProps({ 'aria-label': 'Top Rated' });
    act(() => {
      button.props.onClick();
    });
    expect(button.props.className).toEqual('navItem_btn navItem_btn__active');
  });

  it('Coming Soon button set active', () => {
    const tree = create(<FilterPanel />);
    const button = tree.root.findByProps({ 'aria-label': 'Coming Soon' });
    act(() => {
      button.props.onClick();
    });
    expect(button.props.className).toEqual('navItem_btn navItem_btn__active');
  });

  it('Genres select set active', () => {
    const tree = create(<FilterPanel />);
    const select = tree.root.findByProps({ 'aria-label': 'Genres' });
    act(() => {
      select.props.onClick();
    });
    expect(select.props.className).toEqual('navItem_selectGenre navItem_btn__active');
  });
});
