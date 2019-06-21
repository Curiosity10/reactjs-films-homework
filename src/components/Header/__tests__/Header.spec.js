import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Header from '..';

describe('Header component renders correctly', () => {
  it('Header renders correctly', () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(<Header />);
    expect(result).toMatchSnapshot();
  });
});
