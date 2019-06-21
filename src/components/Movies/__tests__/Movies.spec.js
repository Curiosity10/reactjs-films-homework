import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Movies from '../Movies';

describe('Movies component renders correctly', () => {
  it('Movies grid renders correctly', () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(
      <Movies
        page={2}
        movies={[{ title: 'first movie' }, { title: 'second movie' }]}
        layout="grid"
      />,
    );
    expect(result).toMatchSnapshot();
  });
});
