import React from 'react';
import { create } from 'react-test-renderer';
import Star from '..';

describe('Star component renders correctly', () => {
  it('Selected Star renders correctly', () => {
    const tree = create(<Star isSelected />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Not selected Star renders correctly', () => {
    const tree = create(<Star isSelected={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
