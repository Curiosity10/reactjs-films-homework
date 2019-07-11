import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Movies from './Movies';
import {
  fetchMoviesByFilter,
  fetchSearchMovies,
  fetchMoviesByGenre,
} from '../../modules/app/appActions';
import layoutSelector from '../../modules/ui/uiSelectors';
import {
  filterSelector,
  currentPageSelector,
  isLoadingSelector,
  genreIdSelector,
  searchQuerySelector,
  hasMorePagesSelector,
  videoSrcSelector,
  moviesSelector,
  errorMessageSelector,
} from '../../modules/app/appSelectors';
import { MAX_SCROLL_HEIGHT } from './utils/constants';

export const handleScroll = ({
  isLoading,
  hasMorePages,
  filter,
  getMoviesByFilter,
  getMoviesByGenre,
  getSearchMovies,
  genreId,
  searchQuery,
  window,
}) => {
  if (isLoading) {
    return;
  }

  const { scrollHeight, clientHeight } = window.document.documentElement;
  const scrollPos = window.pageYOffset;
  const currentPosition = scrollPos + clientHeight;
  const percentageScrolled = currentPosition / scrollHeight;

  if (percentageScrolled > MAX_SCROLL_HEIGHT && hasMorePages) {
    switch (filter) {
      case 'popular':
      case 'top_rated':
      case 'upcoming':
        getMoviesByFilter();
        break;
      case 'Genres':
        getMoviesByGenre(genreId);
        break;
      case 'Search':
        getSearchMovies(searchQuery);
        break;
      default:
        break;
    }
  }
};
const MovieContainer = ({
  isLoading, filter, currentPage, genreId,
  searchQuery, movies, layout, getMoviesByFilter,
  getSearchMovies, getMoviesByGenre, videoSrc,
  hasMorePages, errorMsg,
}) => {
  useLayoutEffect(() => {
    const callback = () => handleScroll({
      isLoading,
      hasMorePages,
      filter,
      getMoviesByFilter,
      getMoviesByGenre,
      getSearchMovies,
      genreId,
      searchQuery,
      window,
    });

    document.addEventListener('scroll', callback);

    return () => {
      document.removeEventListener('scroll', callback);
    };
  }, [
    isLoading, hasMorePages, filter,
    getMoviesByFilter, getMoviesByGenre, genreId,
    getSearchMovies, searchQuery,
  ]);

  return (
    <Movies
      errorMsg={errorMsg}
      page={currentPage}
      videoSrc={videoSrc}
      isLoading={isLoading}
      movies={movies}
      layout={layout}
    />
  );
};

const mapStateToProps = state => ({
  movies: moviesSelector(state),
  layout: layoutSelector(state),
  currentPage: currentPageSelector(state),
  isLoading: isLoadingSelector(state),
  filter: filterSelector(state),
  genreId: genreIdSelector(state),
  searchQuery: searchQuerySelector(state),
  hasMorePages: hasMorePagesSelector(state),
  videoSrc: videoSrcSelector(state),
  errorMsg: errorMessageSelector(state),
});

const actions = {
  getMoviesByFilter: fetchMoviesByFilter,
  getSearchMovies: fetchSearchMovies,
  getMoviesByGenre: fetchMoviesByGenre,
};

MovieContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  layout: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
  filter: PropTypes.string.isRequired,
  genreId: PropTypes.string,
  searchQuery: PropTypes.string,
  videoSrc: PropTypes.string,
  errorMsg: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  hasMorePages: PropTypes.bool.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object),
  getMoviesByFilter: PropTypes.func.isRequired,
  getSearchMovies: PropTypes.func.isRequired,
  getMoviesByGenre: PropTypes.func.isRequired,
};

MovieContainer.defaultProps = {
  genreId: null,
  searchQuery: '',
  videoSrc: '',
  movies: [],
  errorMsg: '',
};

export default connect(mapStateToProps, actions)(MovieContainer);
