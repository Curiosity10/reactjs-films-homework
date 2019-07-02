import React from 'react';
import { create, act } from 'react-test-renderer';
import Hero from '..';
import { getMovieInfo } from '../../../utils/tbdbApiService';
import mockedMovie from '../../../assets/json/movie.json';

describe('Hero component renders correctly', () => {
  const movie = getMovieInfo(mockedMovie);

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
