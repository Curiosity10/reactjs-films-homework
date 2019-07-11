import React from 'react';
import { create, act } from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import { JSDOM } from 'jsdom';
import MoviesContainer from '..';
import { handleScroll } from '../MoviesContainer';
import { genres } from '../../../__mocks__/genres.json';

global.fetch = require('jest-fetch-mock');

describe('MoviesContainer component renders correctly', () => {
  beforeAll(() => {
    const dom = new JSDOM();
    global.document = dom.window.document;
    global.window = dom.window;
    ReactDOM.createPortal = jest.fn(element => element);
  });

  afterEach(() => {
    ReactDOM.createPortal.mockClear();
  });

  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const movies = [
    {
      title: 'test',
      id: 1,
      genre_ids: [
        {
          id: 12,
          name: 'Action',
        },
        {
          id: 16,
          name: 'Adventure',
        },
      ],
      overview: 'desc',
    },
    {
      title: 'test2',
      id: 2,
      genre_ids: [
        {
          id: 21,
          name: 'Action',
        },
        {
          id: 23,
          name: 'Adventure',
        },
      ],
      overview: 'desc2',
    },
  ];

  it('MoviesContainer grid render, unmount and scroll correctly', () => {
    const initialState = {
      app: {
        movies,
        genres,
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
    let tree;

    act(() => {
      tree = create(
        <Provider store={store}>
          <MoviesContainer />
        </Provider>,
      );
    });

    const event = new Event('scroll', {});
    act(() => {
      document.dispatchEvent(event);
    });

    expect(tree.toJSON()).toMatchSnapshot();
    tree.unmount();
  });

  it('MoviesContainer table render correctly', () => {
    const initialState = {
      app: {
        movies,
        genres,
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
        layout: 'table',
      },
    };
    const store = mockStore(initialState);

    const tree = create(
      <Provider store={store}>
        <MoviesContainer />
      </Provider>,
    );

    const button = tree.root.findAllByProps({ 'aria-label': 'Watch Now' })[0];
    const mockFn = jest.fn(button.props.onClick);

    act(() => {
      mockFn();
    });

    expect(mockFn).toHaveBeenCalled();
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('MoviesContainer without layout renders correctly', () => {
    const initialState = {
      app: {
        movies,
        genres,
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
        layout: '',
      },
    };
    const store = mockStore(initialState);

    const tree = create(
      <Provider store={store}>
        <MoviesContainer />
      </Provider>,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('MoviesContainer without movies table render correctly', () => {
    const initialState = {
      app: {
        movies: [],
        genres,
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
        layout: 'table',
      },
    };
    const store = mockStore(initialState);

    let tree;
    act(() => {
      tree = create(
        <Provider store={store}>
          <MoviesContainer />
        </Provider>,
      );
    });
    expect(tree.toJSON()).toMatchSnapshot();
  });
});

describe('Fetch on scroll work correctly', () => {
  const currentPage = 1;
  const genreId = 12;
  const searchQuery = '123';

  const window = {
    document: {
      documentElement: {
        scrollHeight: 1600,
        clientHeight: 1200,
      },
    },
    pageYOffset: 500,
  };

  const getMoviesByFilter = jest.fn();
  const getMoviesByGenre = jest.fn();
  const getSearchMovies = jest.fn();

  it('Fetch on scroll if not load and filter trending', () => {
    const isLoading = false;
    const hasMorePages = true;
    const filter = 'popular';
    handleScroll({
      isLoading,
      hasMorePages,
      filter,
      currentPage,
      getMoviesByFilter,
      getMoviesByGenre,
      genreId,
      getSearchMovies,
      searchQuery,
      window,
    });
    expect(getMoviesByFilter).toHaveBeenCalled();
  });

  it('Fetch on scroll if not load and filter top rated', () => {
    const hasMorePages = true;
    const isLoading = false;
    const filter = 'top_rated';
    handleScroll({
      isLoading,
      hasMorePages,
      filter,
      currentPage,
      getMoviesByFilter,
      getMoviesByGenre,
      genreId,
      getSearchMovies,
      searchQuery,
      window,
    });
    expect(getMoviesByFilter).toHaveBeenCalled();
  });

  it('Fetch on scroll if not load and filter coming soon', () => {
    const hasMorePages = true;
    const isLoading = false;
    const filter = 'upcoming';
    handleScroll({
      isLoading,
      hasMorePages,
      filter,
      currentPage,
      getMoviesByFilter,
      getMoviesByGenre,
      genreId,
      getSearchMovies,
      searchQuery,
      window,
    });
    expect(getMoviesByFilter).toHaveBeenCalled();
  });

  it('Fetch on scroll if not load and filter genres', () => {
    const hasMorePages = true;
    const isLoading = false;
    const filter = 'Genres';
    handleScroll({
      isLoading,
      hasMorePages,
      filter,
      currentPage,
      getMoviesByFilter,
      getMoviesByGenre,
      genreId,
      getSearchMovies,
      searchQuery,
      window,
    });
    expect(getMoviesByGenre).toHaveBeenCalled();
  });

  it('Fetch on scroll if not load and filter search', () => {
    const hasMorePages = true;
    const isLoading = false;
    const filter = 'Search';
    handleScroll({
      isLoading,
      hasMorePages,
      filter,
      currentPage,
      getMoviesByFilter,
      getMoviesByGenre,
      genreId,
      getSearchMovies,
      searchQuery,
      window,
    });
    expect(getSearchMovies).toHaveBeenCalled();
  });

  it('Fetch on scroll if not load without filter', () => {
    const hasMorePages = true;
    const isLoading = false;
    const filter = 'Hello';
    const mockFn = jest.fn(() => handleScroll({
      isLoading,
      hasMorePages,
      filter,
      currentPage,
      getMoviesByFilter,
      getMoviesByGenre,
      genreId,
      getSearchMovies,
      searchQuery,
      window,
    }));

    act(() => {
      mockFn();
    });

    expect(mockFn).toHaveBeenCalled();
  });

  it('Fetch on scroll if loading = true', () => {
    const hasMorePages = true;
    const isLoading = true;
    const filter = 'Hello';
    const mockFn = jest.fn(() => handleScroll({
      isLoading,
      hasMorePages,
      filter,
      currentPage,
      getMoviesByFilter,
      getMoviesByGenre,
      genreId,
      getSearchMovies,
      searchQuery,
      window,
    }));

    act(() => {
      mockFn();
    });

    expect(mockFn).toHaveBeenCalled();
  });

  it('Fetch on scroll if hasn\'t more pages', () => {
    const hasMorePages = false;
    const isLoading = false;
    const filter = 'Hello';
    const mockFn = jest.fn(() => handleScroll({
      isLoading,
      hasMorePages,
      filter,
      currentPage,
      getMoviesByFilter,
      getMoviesByGenre,
      genreId,
      getSearchMovies,
      searchQuery,
      window,
    }));

    act(() => {
      mockFn();
    });

    expect(mockFn).toHaveBeenCalled();
  });
});
