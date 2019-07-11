import React from 'react';
import { create } from 'react-test-renderer';
import Genres from '..';
import { genres } from '../../../__mocks__/genres.json';

describe('Genres component renders correctly', () => {
  it('Genres renders correctly', () => {
    const tree = create(<Genres genres={genres} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
