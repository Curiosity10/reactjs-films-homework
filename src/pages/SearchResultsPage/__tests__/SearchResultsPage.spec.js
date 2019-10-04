import React from 'react';
import { create, act } from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import SearchResultsPage from '../SearchResultsPage';

describe('SearchResultsPage renders correctly', () => {
  const middlewares = [];
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

  it('SearchResultsPage render correctly', () => {
    const mockFetchGenres = jest.fn();
    const mockChangeFilter = jest.fn();
    const mockFetchMoviesByFilter = jest.fn();
    const mockFetchMoviesByGenre = jest.fn();
    const mockFetchSearchMovies = jest.fn();

    const tree = create(
      <StaticRouter location={{}}>
        <Provider store={store}>
          <SearchResultsPage
            fetchGenres={mockFetchGenres}
            changeFilter={mockChangeFilter}
            fetchMoviesByFilter={mockFetchMoviesByFilter}
            fetchMoviesByGenre={mockFetchMoviesByGenre}
            fetchSearchMovies={mockFetchSearchMovies}
            location={{ pathname: '/123', search: '?id=1' }}
          />
        </Provider>
      </StaticRouter>,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Fetch movies by filter calls correctly', () => {
    const mockFetchGenres = jest.fn();
    const mockChangeFilter = jest.fn();
    const mockFetchMoviesByFilter = jest.fn();
    const mockFetchMoviesByGenre = jest.fn();
    const mockFetchSearchMovies = jest.fn();

    let tree;

    act(() => {
      tree = create(
        <StaticRouter location={{ pathname: '/', search: '?id=1' }}>
          <Provider store={store}>
            <SearchResultsPage
              fetchGenres={mockFetchGenres}
              changeFilter={mockChangeFilter}
              fetchMoviesByFilter={mockFetchMoviesByFilter}
              fetchMoviesByGenre={mockFetchMoviesByGenre}
              fetchSearchMovies={mockFetchSearchMovies}
              location={{ pathname: '/', search: '?id=1' }}
            />
          </Provider>
        </StaticRouter>,
      );
    });

    expect(mockFetchGenres).toHaveBeenCalled();
    expect(mockChangeFilter).toHaveBeenCalled();
    expect(mockFetchMoviesByFilter).toHaveBeenCalled();
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Fetch movies by genre calls correctly', () => {
    const mockFetchGenres = jest.fn();
    const mockChangeFilter = jest.fn();
    const mockFetchMoviesByFilter = jest.fn();
    const mockFetchMoviesByGenre = jest.fn();
    const mockFetchSearchMovies = jest.fn();

    let tree;

    act(() => {
      tree = create(
        <StaticRouter location={{ pathname: '/Genres', search: '?id=1' }}>
          <Provider store={store}>
            <SearchResultsPage
              fetchGenres={mockFetchGenres}
              changeFilter={mockChangeFilter}
              fetchMoviesByFilter={mockFetchMoviesByFilter}
              fetchMoviesByGenre={mockFetchMoviesByGenre}
              fetchSearchMovies={mockFetchSearchMovies}
              location={{ pathname: '/Genres', search: '?id=1' }}
            />
          </Provider>
        </StaticRouter>,
      );
    });

    expect(mockFetchGenres).toHaveBeenCalled();
    expect(mockChangeFilter).toHaveBeenCalled();
    expect(mockFetchMoviesByGenre).toHaveBeenCalled();
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Fetch movies by search query calls correctly', () => {
    const mockFetchGenres = jest.fn();
    const mockChangeFilter = jest.fn();
    const mockFetchMoviesByFilter = jest.fn();
    const mockFetchMoviesByGenre = jest.fn();
    const mockFetchSearchMovies = jest.fn();

    let tree;

    act(() => {
      tree = create(
        <StaticRouter location={{ pathname: '/Search', search: '?id=1' }}>
          <Provider store={store}>
            <SearchResultsPage
              fetchGenres={mockFetchGenres}
              changeFilter={mockChangeFilter}
              fetchMoviesByFilter={mockFetchMoviesByFilter}
              fetchMoviesByGenre={mockFetchMoviesByGenre}
              fetchSearchMovies={mockFetchSearchMovies}
              location={{ pathname: '/Search', search: '?id=1' }}
            />
          </Provider>
        </StaticRouter>,
      );
    });

    expect(mockFetchGenres).toHaveBeenCalled();
    expect(mockChangeFilter).toHaveBeenCalled();
    expect(mockFetchSearchMovies).toHaveBeenCalled();
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
