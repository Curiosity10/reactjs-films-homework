import React from 'react';
import { create } from 'react-test-renderer';
import Icon from '..';

describe('Icon component renders correctly', () => {
  it('Search icon renders correctly', () => {
    const tree = create(<Icon color="#fff" name="search" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Grid icon renders correctly', () => {
    const tree = create(<Icon color="#fff" name="grid" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Table icon renders correctly', () => {
    const tree = create(<Icon color="#fff" name="table" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Play icon renders correctly', () => {
    const tree = create(<Icon color="#fff" name="play" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Close icon renders correctly', () => {
    const tree = create(<Icon color="#fff" name="close" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Default no icon', () => {
    const tree = create(<Icon color="#fff" name="" />).toJSON();
    expect(tree).toBe(null);
  });
});
