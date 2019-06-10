import React from 'react';
import { create } from 'react-test-renderer';
import Footer from '..';

describe('Footer component renders correctly', () => {
  it('Footer renders correctly', () => {
    const tree = create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
