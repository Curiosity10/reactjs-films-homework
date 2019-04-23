import React from 'react';
import { create } from 'react-test-renderer';
import Spinner from '..';

describe('Spinner component renders correctly', () => {
  it('Spinner renders correctly', () => {
    const tree = create(<Spinner />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
