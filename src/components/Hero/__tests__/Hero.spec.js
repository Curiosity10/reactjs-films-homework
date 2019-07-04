import React from 'react';
import { create, act } from 'react-test-renderer';
import Hero from '..';

describe('Hero component renders correctly', () => {
  const movie = {
    id: 123,
    rating: 5,
    title: 'Test title',
    genres: [
      {
        id: 12,
        name: 'Adventure',
      },
      {
        id: 16,
        name: 'Action',
      },
    ],
    overview: 'Test description',
    image: '/123',
  };

  it('Hero renders correctly', () => {
    const tree = create(<Hero movie={movie} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Hide description works correctly', () => {
    const tree = create(<Hero movie={movie} />);
    const button = tree.root.findByProps({ 'aria-label': 'View Info' });

    act(() => {
      button.props.onClick();
    });

    const description = tree.toJSON().children[1].children[0];
    expect(description.props.className).toEqual('hiddenDesc');
  });
});
