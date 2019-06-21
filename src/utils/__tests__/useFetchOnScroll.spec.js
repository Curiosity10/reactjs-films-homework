import { JSDOM } from 'jsdom';
import React from 'react';
import { act, create } from 'react-test-renderer';
import { handleScroll, useFetchOnScroll } from '../useFetchOnScroll';

describe('Fetch on scroll work correctly', () => {
  const currentPage = 1;
  const currentGenre = 12;
  const currentSearchQuery = '123';
  const window = {
    document: {
      documentElement: {
        scrollHeight: 1600,
        clientHeight: 1200,
      },
    },
    pageYOffset: 500,
  };
  const getLatestMovies = jest.fn();
  const getTopRatedMovies = jest.fn();
  const getUpcomingMovies = jest.fn();
  const getMoviesByGenre = jest.fn();
  const getSearchMovies = jest.fn();
  it('Fetch on scroll if not load and filter trending', () => {
    const isLoading = false;
    const hasMorePages = true;
    const filter = 'Trending';
    handleScroll(
      isLoading, hasMorePages, filter, currentPage,
      getLatestMovies, getTopRatedMovies, getUpcomingMovies,
      getMoviesByGenre, currentGenre, getSearchMovies, currentSearchQuery, window,
    );
    expect(getLatestMovies).toHaveBeenCalled();
  });
  it('Fetch on scroll if not load and filter top rated', () => {
    const hasMorePages = true;
    const isLoading = false;
    const filter = 'Top Rated';
    handleScroll(
      isLoading, hasMorePages, filter, currentPage,
      getLatestMovies, getTopRatedMovies, getUpcomingMovies,
      getMoviesByGenre, currentGenre, getSearchMovies, currentSearchQuery,
      window,
    );
    expect(getTopRatedMovies).toHaveBeenCalled();
  });
  it('Fetch on scroll if not load and filter coming soon', () => {
    const hasMorePages = true;
    const isLoading = false;
    const filter = 'Coming Soon';
    handleScroll(
      isLoading, hasMorePages, filter, currentPage,
      getLatestMovies, getTopRatedMovies, getUpcomingMovies,
      getMoviesByGenre, currentGenre, getSearchMovies, currentSearchQuery,
      window,
    );
    expect(getUpcomingMovies).toHaveBeenCalled();
  });
  it('Fetch on scroll if not load and filter genres', () => {
    const hasMorePages = true;
    const isLoading = false;
    const filter = 'Genres';
    handleScroll(
      isLoading, hasMorePages, filter, currentPage,
      getLatestMovies, getTopRatedMovies, getUpcomingMovies,
      getMoviesByGenre, currentGenre, getSearchMovies, currentSearchQuery,
      window,
    );
    expect(getMoviesByGenre).toHaveBeenCalled();
  });
  it('Fetch on scroll if not load and filter search', () => {
    const hasMorePages = true;
    const isLoading = false;
    const filter = 'Search';
    handleScroll(
      isLoading, hasMorePages, filter, currentPage,
      getLatestMovies, getTopRatedMovies, getUpcomingMovies,
      getMoviesByGenre, currentGenre, getSearchMovies, currentSearchQuery,
      window,
    );
    expect(getSearchMovies).toHaveBeenCalled();
  });
  it('Fetch on scroll if not load without filter', () => {
    const hasMorePages = true;
    const isLoading = false;
    const filter = 'Hello';
    const mockFn = jest.fn(() => handleScroll(
      isLoading, hasMorePages, filter, currentPage,
      getLatestMovies, getTopRatedMovies, getUpcomingMovies,
      getMoviesByGenre, currentGenre, getSearchMovies, currentSearchQuery,
      window,
    ));
    act(() => {
      mockFn();
    });
    expect(mockFn).toHaveBeenCalled();
  });
  it('Fetch on scroll if loading = true', () => {
    const hasMorePages = true;
    const isLoading = true;
    const filter = 'Hello';
    const mockFn = jest.fn(() => handleScroll(
      isLoading, hasMorePages, filter, currentPage,
      getLatestMovies, getTopRatedMovies, getUpcomingMovies,
      getMoviesByGenre, currentGenre, getSearchMovies, currentSearchQuery,
      window,
    ));
    act(() => {
      mockFn();
    });
    expect(mockFn).toHaveBeenCalled();
  });
  it('Fetch on scroll if hasn\'t more pages', () => {
    const hasMorePages = false;
    const isLoading = false;
    const filter = 'Hello';
    const mockFn = jest.fn(() => handleScroll(
      isLoading, hasMorePages, filter, currentPage,
      getLatestMovies, getTopRatedMovies, getUpcomingMovies,
      getMoviesByGenre, currentGenre, getSearchMovies, currentSearchQuery,
      window,
    ));
    act(() => {
      mockFn();
    });
    expect(mockFn).toHaveBeenCalled();
  });
  it('Callback call correctly', () => {
    const dom = new JSDOM();
    global.document = dom.window.document;
    global.window = dom.window;
    const hasMorePages = false;
    const isLoading = false;
    const filter = 'Hello';
    const Component = () => {
      useFetchOnScroll(
        isLoading, hasMorePages, filter, currentPage,
        getLatestMovies, getTopRatedMovies, getUpcomingMovies,
        getMoviesByGenre, currentGenre, getSearchMovies, currentSearchQuery,
      );
      return <h1>Hello</h1>;
    };
    let tree;
    act(() => {
      tree = create(<Component />);
    });
    const event = new Event('scroll', {});
    act(() => {
      document.dispatchEvent(event);
    });
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
