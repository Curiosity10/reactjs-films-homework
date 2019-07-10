import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Menu from '..';

describe('Menu component renders correctly', () => {
  it('Menu renders correctly', () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(<Menu />);

    expect(result).toMatchSnapshot();
  });
});
