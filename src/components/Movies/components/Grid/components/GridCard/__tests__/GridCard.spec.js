import React, { useState } from 'react';
import { create, act } from 'react-test-renderer';
import GridCard from '../index';
import { getMovieInfo } from '../../../../../../../utils/tbdbApiService';

describe('GridCard component renders correctly', () => {
  const movie = { ...getMovieInfo(), id: 2 };
  const activeCard = 1;
  const mockFunction = jest.fn();

  it('GridCard renders correctly', () => {
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
      const film = { ...getMovieInfo(), id: 2 };
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
    const button = tree.root.findByProps({ 'aria-label': 'View Info' });
    act(() => {
      button.props.onClick();
    });
    const overlay = tree.toJSON().children[1];
    expect(overlay.props).toEqual({ className: 'overlay' });
  });

  it('Set default card with short overview works correctly', () => {
    const Wrapper = () => {
      const film = { ...getMovieInfo(), overview: 'Hello World', id: 2 };
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
    const button = tree.root.findByProps({ 'aria-label': 'Close' });
    act(() => {
      button.props.onClick();
    });
    const onHover = tree.toJSON().children[1];
    expect(onHover.props).toEqual({ className: 'onHover' });
  });
});
