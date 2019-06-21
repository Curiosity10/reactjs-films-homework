import React, { useState } from 'react';
import { create, act } from 'react-test-renderer';
import GridCard from '../GridCard';
import { getMovies } from '../../../../../../../utils';
import mockMovies from '../../../../../../../assets/json/popular.json';
import { genres } from '../../../../../../../assets/json/genres.json';

describe('GridCard component renders correctly', () => {
  const movie = { ...getMovies(mockMovies.results, genres)[0], id: 1 };
  const activeCard = 1;
  const mockFunction = jest.fn();

  it('GridCard renders and works correctly', () => {
    const tree = create(
      <GridCard
        movie={movie}
        activeCard={activeCard}
        changeActiveCard={mockFunction}
        isActive={false}
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Set overlay works correctly', () => {
    const Wrapper = () => {
      const film = { ...getMovies(mockMovies.results, genres)[0], id: 2 };
      const [currentCard, setCurrentCard] = useState(1);
      return (
        <>
          <GridCard
            movie={film}
            changeActiveCard={id => setCurrentCard(id)}
            isActive={film.id !== currentCard}
          />
        </>
      );
    };
    const tree = create(
      <Wrapper />,
    );
    const watchBtn = tree.root.findByProps({ 'aria-label': 'Watch' });
    const mockWatchBtn = jest.fn(watchBtn.props.onClick);
    const button = tree.root.findByProps({ 'aria-label': 'View Info' });
    act(() => {
      mockWatchBtn();
      button.props.onClick();
    });
    const overlay = tree.toJSON().children[1];
    expect(mockWatchBtn).toHaveBeenCalled();
    expect(overlay.props).toEqual({ className: 'overlay' });
  });

  it('Set default card with short overview works correctly', () => {
    const Wrapper = () => {
      const film = { ...getMovies(mockMovies.results, genres)[0], id: 2 };
      const [currentCard, setCurrentCard] = useState(2);
      return (
        <>
          <GridCard
            movie={film}
            changeActiveCard={id => setCurrentCard(id)}
            isActive={film.id !== currentCard}
          />
        </>
      );
    };
    const tree = create(
      <Wrapper />,
    );
    const watchBtn = tree.root.findByProps({ 'aria-label': 'Watch Now' });
    const mockWatchBtn = jest.fn(watchBtn.props.onClick);
    const button = tree.root.findByProps({ 'aria-label': 'Close' });
    act(() => {
      mockWatchBtn();
      button.props.onClick();
    });
    const onHover = tree.toJSON().children[1];
    expect(onHover.props).toEqual({ className: 'onHover' });
    expect(mockWatchBtn).toHaveBeenCalled();
  });
});
