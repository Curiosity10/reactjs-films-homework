import React from 'react';
import { create } from 'react-test-renderer';
import Header from '..';

describe('Header component renders correctly', () => {
  it('Header renders correctly', () => {
    const tree = create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
