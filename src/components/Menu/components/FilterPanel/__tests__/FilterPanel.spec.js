import React, { useState } from 'react';
import { create, act } from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import FilterPanel from '../FilterPanel';

global.fetch = require('jest-fetch-mock');

describe('FilterPanel component', () => {
  const middlewares = [thunkMiddleware];
  const mockStore = configureStore(middlewares);
  const initialState = {
    app: {
      movies: [],
      genres: [],
      isLoading: true,
      currentPage: 1,
      error: false,
      filter: 'Trending',
      genreId: null,
      searchQuery: '',
      videoKey: '',
      pagesCount: 1,
    },
    ui: {
      layout: 'grid',
    },
  };
  const store = mockStore(initialState);
  const mockSetActive = jest.fn();

  it('FilterPanel component renders correctly', () => {
    const mockFetchMoviesByFilter = jest.fn();
    const mockchangeFilter = jest.fn();

    const MockComponent = () => {
      const [activeItem, setActiveItem] = useState('Top Rated');
      return (
        <FilterPanel
          activeItem={activeItem}
          checkActiveItem={setActiveItem}
          setActive={mockSetActive}
          fetchMoviesByFilter={mockFetchMoviesByFilter}
          changeFilter={mockchangeFilter}
        />
      );
    };

    const tree = create(
      <Provider store={store}>
        <MockComponent />
      </Provider>,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('FilterPanel component without props works correctly', () => {
    const MockComponent = () => {
      const fetchMoviesByFilter = jest.fn();
      const changeFilter = jest.fn();

      return (
        <FilterPanel
          fetchMoviesByFilter={fetchMoviesByFilter}
          changeFilter={changeFilter}
          filter="top_rated"
        />
      );
    };

    const tree = create(
      <Provider store={store}>
        <MockComponent />
      </Provider>,
    );

    const latestBtn = tree.root.findByProps({ 'aria-label': 'Trending' });
    const topRatedBtn = tree.root.findByProps({ 'aria-label': 'Top Rated' });
    const upcomingBtn = tree.root.findByProps({ 'aria-label': 'Coming Soon' });
    const genresSelect = tree.root.findByProps({ 'aria-label': 'Genres' });
    const mockFetchTopRatedMovies = jest.fn(latestBtn.props.onClick);
    const mockFetchLatestMovies = jest.fn(topRatedBtn.props.onClick);
    const mockFetchUpcomingMovies = jest.fn(upcomingBtn.props.onClick);
    const mockchangeFilter = jest.fn(genresSelect.props.onChange);

    act(() => {
      mockFetchTopRatedMovies();
      mockFetchLatestMovies();
      mockFetchUpcomingMovies();
      mockchangeFilter({ target: { value: '123' } });
    });

    expect(mockFetchTopRatedMovies).toHaveBeenCalled();
    expect(mockFetchLatestMovies).toHaveBeenCalled();
    expect(mockFetchUpcomingMovies).toHaveBeenCalled();
    expect(mockchangeFilter).toHaveBeenCalled();
  });
});
