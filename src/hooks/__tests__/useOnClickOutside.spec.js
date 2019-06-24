import React from 'react';
import { create, act } from 'react-test-renderer';
import { useOnClickOutside } from '..';

describe('Body scroll lock work correctly', () => {
  const ref = {
    current: null,
  };
  const Component = () => {
    useOnClickOutside(ref);
    return <h1>Hello</h1>;
  };
  it('Body scroll lock not calls without ref', () => {
    let tree;
    act(() => {
      tree = create(<Component />);
    });
    const event = new MouseEvent('mousedown', {});
    act(() => {
      document.dispatchEvent(event);
    });
    expect(tree.toJSON()).toMatchSnapshot();
    tree.unmount();
  });
});
