import React, { useState } from 'react';
import { create, act } from 'react-test-renderer';
import { StaticRouter } from 'react-router-dom';
import GridCard from '../GridCard';

describe('GridCard component renders correctly', () => {
  const movie = {
    title: 'test',
    id: 1,
    genre_ids: [
      {
        id: 12,
        name: 'Action',
      },
      {
        id: 16,
        name: 'Adventure',
      },
    ],
    overview: 'desc',
  };
  const activeCard = 1;
  const mockChangeActiveCard = jest.fn();
  const mockFetchVideoKey = jest.fn();
  const mockToggleModal = jest.fn();

  it('GridCard renders and works correctly', () => {
    const tree = create(
      <StaticRouter location="someLocation">
        <GridCard
          movie={movie}
          activeCard={activeCard}
          changeActiveCard={mockChangeActiveCard}
          isActive={false}
          fetchVideoKey={mockFetchVideoKey}
          toggleModal={mockToggleModal}
        />
      </StaticRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Set overlay works correctly', () => {
    const Wrapper = () => {
      const film = {
        title: 'test',
        id: 2,
        genre_ids: [
          {
            id: 12,
            name: 'Action',
          },
          {
            id: 16,
            name: 'Adventure',
          },
        ],
        overview: 'desc',
      };
      const [currentCard, setCurrentCard] = useState(1);
      return (
        <StaticRouter location="someLocation">
          <GridCard
            movie={film}
            changeActiveCard={id => setCurrentCard(id)}
            isActive={film.id !== currentCard}
            fetchVideoKey={mockFetchVideoKey}
            toggleModal={mockToggleModal}
          />
        </StaticRouter>
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
      const film = {
        title: 'test',
        id: 2,
        genre_ids: [
          {
            id: 12,
            name: 'Action',
          },
          {
            id: 16,
            name: 'Adventure',
          },
        ],
        overview: 'desc',
      };
      const [currentCard, setCurrentCard] = useState(2);
      return (
        <StaticRouter location="someLocation">
          <GridCard
            movie={film}
            changeActiveCard={id => setCurrentCard(id)}
            isActive={film.id !== currentCard}
            fetchVideoKey={mockFetchVideoKey}
            toggleModal={mockToggleModal}
          />
        </StaticRouter>
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
