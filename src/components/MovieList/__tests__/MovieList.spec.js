import React, { useState } from 'react';
import renderer from 'react-test-renderer';
import MovieList from '..';
import { getPopularMovies } from '../../../utils/tbdbApiService';

describe('Default MovieList component renders correctly', () => {
  const TestContext = React.createContext();
  it('GridMovieList renders correctly', () => {
    const TestContextProvider = ({ children }) => {
      const [layout, setLayout] = useState('grid');
      const initialState = {
        movies: getPopularMovies(),
        layout,
        changeLayout: setLayout,
      };
      return (
        <TestContext.Provider value={initialState}>
          {children}
        </TestContext.Provider>
      );
    };
    const tree = renderer.create(
      <TestContextProvider>
        <MovieList context={TestContext} />
      </TestContextProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('TableMovieList renders correctly', () => {
    const TestContextProvider = ({ children }) => {
      const [layout, setLayout] = useState('table');
      const initialState = {
        movies: getPopularMovies(),
        layout,
        changeLayout: setLayout,
      };
      return (
        <TestContext.Provider value={initialState}>
          {children}
        </TestContext.Provider>
      );
    };
    const tree = renderer.create(
      <TestContextProvider>
        <MovieList context={TestContext} />
      </TestContextProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
