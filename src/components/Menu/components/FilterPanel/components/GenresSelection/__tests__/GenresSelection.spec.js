import React from 'react';
import { create, act } from 'react-test-renderer';
import GenresSelection from '../GenresSelection';
import { genres } from '../../../../../../../__mocks__/genres.json';

describe('GenresSelection component', () => {
  const setActiveItem = jest.fn();
  const setActive = jest.fn();
  const fetchMoviesByGenre = jest.fn();

  it('GenresSelection component renders correctly', () => {
    const tree = create(
      <GenresSelection
        activeItem="Trending"
        setActiveItem={setActiveItem}
        fetchedGenres={genres}
        setActive={setActive}
        fetchMoviesByGenre={fetchMoviesByGenre}
      />,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
  it('GenresSelection component with filter renders correctly', () => {
    let tree;

    act(() => {
      tree = create(
        <GenresSelection filter="Genres" />,
      );
    });

    expect(tree.toJSON()).toMatchSnapshot();
  });
  it('GenresSelection component without props works correctly', () => {
    const tree = create(
      <GenresSelection />,
    );
    const select = tree.root.findByProps({ 'aria-label': 'Genres' });
    const mockOnChange = jest.fn(select.props.onChange);

    act(() => {
      mockOnChange({ target: { value: '123' } });
    });

    expect(mockOnChange).toHaveBeenCalled();
  });
});
