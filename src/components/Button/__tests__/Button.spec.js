import React from 'react';
import Button from '..';
import { create, act } from 'react-test-renderer';

describe('Button component renders correctly', () => {
  it('Primary button renders correctly', () => {
    const tree = create(<Button type="primary">Watch Now</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Ghost button renders correctly', () => {
    const tree = create(<Button type="ghost">View Info</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Click button with handler works correctly', () => {
    const mockFunction = jest.fn();
    const tree = create(
      <Button
        handleClick={mockFunction}
        type="ghost"
      >
        View Info
      </Button>,
    );
    const button = tree.root.children[0];
    act(() => {
      button.props.onClick();
    });
    expect(mockFunction.mock.calls.length).toEqual(1);
  });

  it('Click button without handler works correctly', () => {
    const tree = create(
      <Button
        type="ghost"
      >
        View Info
      </Button>,
    );
    const button = tree.root.children[0];
    const mockFunction = jest.fn(button.props.onClick);
    act(() => {
      mockFunction();
    });
    expect(mockFunction).toHaveBeenCalled();
  });
});
