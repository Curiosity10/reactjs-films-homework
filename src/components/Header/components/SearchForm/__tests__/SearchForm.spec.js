import React from 'react';
import { create, act } from 'react-test-renderer';
import SearchForm from '../SearchForm';

describe('SearchForm component renders correctly', () => {
  const tree = create(<SearchForm />);

  it('SearchForm renders correctly', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('SearchForm empty onSubmit works correctly', () => {
    const e = { preventDefault: jest.fn() };
    const mockFunction = jest.fn(() => tree.toJSON().props.onSubmit(e));

    act(() => {
      mockFunction();
    });

    expect(mockFunction).toHaveBeenCalled();
  });

  it('SearchForm full onSubmit works correctly', () => {
    const input = tree.root.findByProps({ 'aria-label': 'Search Input' });
    const e = { target: { value: '123' } };
    const mockOnChangeFn = jest.fn(() => input.props.onChange(e));

    act(() => {
      mockOnChangeFn();
    });

    const event = { preventDefault: jest.fn() };
    const mockOnSubmitFn = jest.fn(() => tree.toJSON().props.onSubmit(event));

    act(() => {
      mockOnSubmitFn();
    });

    expect(input.props.value).toBe('123');
  });

  it('SearchForm onChange works correctly', () => {
    const input = tree.root.findByProps({ 'aria-label': 'Search Input' });
    const e = { target: { value: '123' } };
    const mockFunction = jest.fn(() => input.props.onChange(e));

    act(() => {
      mockFunction();
    });

    expect(mockFunction).toHaveBeenCalled();
  });
});
