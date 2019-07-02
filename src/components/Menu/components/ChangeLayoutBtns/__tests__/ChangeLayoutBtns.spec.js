import React from 'react';
import { create, act } from 'react-test-renderer';
import ChangeLayoutBtns from '../ChangeLayoutBtns';

describe('ChangeLayoutBtns component', () => {
  it('ChangeLayoutBtns renders correctly', () => {
    const tree = create(<ChangeLayoutBtns />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Grid button set active', () => {
    const tree = create(
      <ChangeLayoutBtns />,
    );
    const button = tree.root.findByProps({ 'aria-label': 'Grid' });

    act(() => {
      button.props.onClick();
    });

    expect(button.props.className).toEqual('btn btn__active');
  });

  it('Table button set active', () => {
    const tree = create(
      <ChangeLayoutBtns />,
    );
    const button = tree.root.findByProps({ 'aria-label': 'Table' });
    act(() => {
      button.props.onClick();
    });
    expect(button.props.className).toEqual('btn btn__active');
  });
});
