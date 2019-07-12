import React from 'react';
import { create, act } from 'react-test-renderer';
import { StaticRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import MovieDetailsPage from '../MovieDetailsPage';

describe('MovieDetailsPage renders correctly', () => {
  const middlewares = [];
  const mockStore = configureStore(middlewares);
  const initialState = {
    app: {
      movies: [],
      movie: {
        title: 'Test',
        backdrop_path: '/123',
        id: '123',
      },
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

  it('MovieDetailsPage render correctly', () => {
    let tree;
    const mockChangeFilter = jest.fn();
    const mockChangeLayout = jest.fn();
    const mockFetchGenres = jest.fn();
    const mockFetchMovieDetails = jest.fn();
    const mockFetchMovies = jest.fn();

    act(() => {
      tree = create(
        <StaticRouter location="someLocation">
          <Provider store={store}>
            <MovieDetailsPage
              fetchMovieDetails={mockFetchMovieDetails}
              fetchMoviesByFilter={mockFetchMovies}
              fetchGenres={mockFetchGenres}
              changeFilter={mockChangeFilter}
              changeLayout={mockChangeLayout}
              id="123"
            />
          </Provider>
        </StaticRouter>,
      );
    });

    expect(tree.toJSON()).toMatchSnapshot();
    expect(mockFetchMovieDetails).toHaveBeenCalled();
    expect(mockFetchMovies).toHaveBeenCalled();
    expect(mockFetchGenres).toHaveBeenCalled();
    expect(mockChangeFilter).toHaveBeenCalled();
    expect(mockChangeLayout).toHaveBeenCalled();
  });
});
