import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('App component renders correctly', () => {
  it('App renders correctly with main page', () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(<App />);
    expect(result).toMatchSnapshot();
  });

  it('App renders correctly with movie details page', () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(
      <MemoryRouter initialEntries={['/movie/123']}>
        <App />
      </MemoryRouter>,
    );
    expect(result).toMatchSnapshot();
  });
});
