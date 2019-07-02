import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Movies from './Movies';
import {
  fetchTopRatedMovies,
  fetchLatestMovies,
  fetchUpcomingMovies,
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
  getMoviesSelector,
} from '../../modules/app/appSelectors';
import { useFetchOnScroll } from '../../hooks';

const MovieContainer = ({
  isLoading, filter, currentPage, genreId,
  searchQuery, movies, layout, getTopRatedMovies,
  getLatestMovies, getUpcomingMovies, getSearchMovies,
  getMoviesByGenre, videoSrc, hasMorePages,
}) => {
  useFetchOnScroll(
    isLoading, hasMorePages, filter, currentPage,
    getLatestMovies, getTopRatedMovies, getUpcomingMovies,
    getMoviesByGenre, genreId, getSearchMovies, searchQuery,
  );
  return (
    <Movies
      page={currentPage}
      videoSrc={videoSrc}
      isLoading={isLoading}
      movies={movies}
      layout={layout}
    />
  );
};

const mapStateToProps = state => ({
  movies: getMoviesSelector(state),
  layout: layoutSelector(state),
  currentPage: currentPageSelector(state),
  isLoading: isLoadingSelector(state),
  filter: filterSelector(state),
  genreId: genreIdSelector(state),
  searchQuery: searchQuerySelector(state),
  hasMorePages: hasMorePagesSelector(state),
  videoSrc: videoSrcSelector(state),
});

const actions = {
  getTopRatedMovies: fetchTopRatedMovies,
  getLatestMovies: fetchLatestMovies,
  getUpcomingMovies: fetchUpcomingMovies,
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
  hasMorePages: PropTypes.bool.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object),
  getTopRatedMovies: PropTypes.func.isRequired,
  getLatestMovies: PropTypes.func.isRequired,
  getUpcomingMovies: PropTypes.func.isRequired,
  getSearchMovies: PropTypes.func.isRequired,
  getMoviesByGenre: PropTypes.func.isRequired,
};

MovieContainer.defaultProps = {
  genreId: null,
  searchQuery: '',
  videoSrc: '',
  movies: [],
};

export default connect(mapStateToProps, actions)(MovieContainer);
