import React from 'react';
import { create, act } from 'react-test-renderer';
import ChangeLayoutBtns from '..';
import { MovieContextProvider } from '../../../../MovieContext';

describe('ChangeLayoutBtns component', () => {
  it('Grid button set active', () => {
    const tree = create(
      <MovieContextProvider>
        <ChangeLayoutBtns />
      </MovieContextProvider>,
    );
    const button = tree.root.findByProps({ 'aria-label': 'Grid' });
    act(() => {
      button.props.onClick();
    });
    expect(button.props.className).toEqual('btn btn__active');
  });

  it('Table button set active', () => {
    const tree = create(
      <MovieContextProvider>
        <ChangeLayoutBtns />
      </MovieContextProvider>,
    );
    const button = tree.root.findByProps({ 'aria-label': 'Table' });
    act(() => {
      button.props.onClick();
    });
    expect(button.props.className).toEqual('btn btn__active');
  });
});
