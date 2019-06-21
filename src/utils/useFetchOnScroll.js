import { useLayoutEffect } from 'react';
import getScrollDownPercentage from './scroll';

export const handleScroll = (
  isLoading, hasMorePages, filter, currentPage,
  getLatestMovies, getTopRatedMovies, getUpcomingMovies,
  getMoviesByGenre, currentGenre, getSearchMovies, currentSearchQuery, window,
) => {
  if (!isLoading) {
    const { scrollHeight, clientHeight } = window.document.documentElement;
    const scrollPos = window.pageYOffset;
    const percentageScrolled = getScrollDownPercentage(
      { scrollHeight, clientHeight, scrollPos },
    );
    if (percentageScrolled > 0.99 && hasMorePages) {
      switch (filter) {
        case 'Trending':
          getLatestMovies(currentPage + 1);
          break;
        case 'Top Rated':
          getTopRatedMovies(currentPage + 1);
          break;
        case 'Coming Soon':
          getUpcomingMovies(currentPage + 1);
          break;
        case 'Genres':
          getMoviesByGenre(currentPage + 1, currentGenre);
          break;
        case 'Search':
          getSearchMovies(currentPage + 1, currentSearchQuery);
          break;
        default: break;
      }
    }
  }
};
export const useFetchOnScroll = (...args) => {
  useLayoutEffect(() => {
    const callback = () => handleScroll(...args, window);
    document.addEventListener('scroll', callback);
    return () => {
      document.removeEventListener('scroll', callback);
    };
  }, [...args]);
};
