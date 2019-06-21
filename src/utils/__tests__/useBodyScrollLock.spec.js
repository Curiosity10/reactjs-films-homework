import React from 'react';
import { create, act } from 'react-test-renderer';
import useBodyScrollLock from '../useBodyScrollLock';

describe('Body scroll lock work correctly', () => {
  const Component = () => {
    useBodyScrollLock();
    return <h1>Hello</h1>;
  };
  it('Set overflow to hidden', () => {
    let tree;
    act(() => {
      tree = create(<Component />);
    });
    expect(tree.toJSON()).toMatchSnapshot();
    tree.unmount();
  });
});
