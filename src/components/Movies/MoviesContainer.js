import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Movies from './Movies';
import {
  fetchTopRatedMovies, fetchLatestMovies, fetchUpcomingMovies,
  fetchSearchMovies, fetchMoviesByGenre, filterSelector,
  currentPageSelector, isLoadingSelector, currentGenreSelector,
  currentSearchQuerySelector, hasMorePagesSelector, videoKeySelector,
  moviesSelector,
} from '../../modules/app';
import { layoutSelector } from '../../modules/ui';
import { useFetchOnScroll } from '../../utils';

const MovieContainer = ({
  isLoading, filter, currentPage, currentGenre,
  currentSearchQuery, movies, layout, getTopRatedMovies,
  getLatestMovies, getUpcomingMovies, getSearchMovies,
  getMoviesByGenre, videoKey, hasMorePages,
}) => {
  useFetchOnScroll(
    isLoading, hasMorePages, filter, currentPage,
    getLatestMovies, getTopRatedMovies, getUpcomingMovies,
    getMoviesByGenre, currentGenre, getSearchMovies, currentSearchQuery,
  );
  return (
    <Movies
      page={currentPage}
      videoKey={videoKey}
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
  currentGenre: currentGenreSelector(state),
  currentSearchQuery: currentSearchQuerySelector(state),
  hasMorePages: hasMorePagesSelector(state),
  videoKey: videoKeySelector(state),
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
  currentGenre: PropTypes.string,
  currentSearchQuery: PropTypes.string,
  videoKey: PropTypes.string,
  hasMorePages: PropTypes.bool.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object),
  getTopRatedMovies: PropTypes.func.isRequired,
  getLatestMovies: PropTypes.func.isRequired,
  getUpcomingMovies: PropTypes.func.isRequired,
  getSearchMovies: PropTypes.func.isRequired,
  getMoviesByGenre: PropTypes.func.isRequired,
};

MovieContainer.defaultProps = {
  currentGenre: '',
  currentSearchQuery: '',
  videoKey: '',
  movies: [],
};

export default connect(mapStateToProps, actions)(MovieContainer);
