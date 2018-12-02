import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import Signature from '../index';

test('Props not undefined', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Signature />);
  const result = renderer.getRenderOutput();
  expect(result.props.children).not.toBeUndefined();
});

test('Test props', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Signature />);
  renderer.render(<Signature name="Ivan Ivanov" />);
  const res = renderer.getRenderOutput();
  expect(res.props.children).toBe('Ivan Ivanov');
});
