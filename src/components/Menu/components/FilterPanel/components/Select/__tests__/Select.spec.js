import React from 'react';
import { create, act } from 'react-test-renderer';
import Select from '../Select';
import { genres } from '../../../../../../../assets/json/genres.json';

describe('Select component', () => {
  const setActiveItem = jest.fn();
  const setActive = jest.fn();
  const fetchMoviesByGenre = jest.fn();
  it('Select component renders correctly', () => {
    const tree = create(
      <Select
        activeItem="Trending"
        setActiveItem={setActiveItem}
        fetchedGenres={genres}
        setActive={setActive}
        fetchMoviesByGenre={fetchMoviesByGenre}
      />,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
  it('Select component with filter renders correctly', () => {
    let tree;
    act(() => {
      tree = create(
        <Select filter="Genres" />,
      );
    });
    expect(tree.toJSON()).toMatchSnapshot();
  });
  it('Select component without props works correctly', () => {
    const tree = create(
      <Select />,
    );
    const select = tree.root.findByProps({ 'aria-label': 'Genres' });
    const mockOnChange = jest.fn(select.props.onChange);
    act(() => {
      mockOnChange({ target: { value: '123' } });
    });
    expect(mockOnChange).toHaveBeenCalled();
  });
});
