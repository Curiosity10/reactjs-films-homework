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
    const mockFetchTopRatedMovies = jest.fn();
    const mockFetchLatestMovies = jest.fn();
    const mockFetchUpcomingMovies = jest.fn();
    const mockchangeFilter = jest.fn();

    const MockComponent = () => {
      const [activeItem, setActiveItem] = useState('Top Rated');
      return (
        <FilterPanel
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          setActive={mockSetActive}
          fetchTopRatedMovies={mockFetchTopRatedMovies}
          fetchLatestMovies={mockFetchLatestMovies}
          fetchUpcomingMovies={mockFetchUpcomingMovies}
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
      const [activeItem, setActiveItem] = useState('Top Rated');
      return (
        <FilterPanel
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          setActive={mockSetActive}
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

  it('FilterPanel\'s defaultprops defined', () => {
    expect(FilterPanel.defaultProps.fetchTopRatedMovies).toBeDefined();
    expect(FilterPanel.defaultProps.fetchLatestMovies).toBeDefined();
    expect(FilterPanel.defaultProps.fetchUpcomingMovies).toBeDefined();
    expect(FilterPanel.defaultProps.changeFilter).toBeDefined();
  });
});
