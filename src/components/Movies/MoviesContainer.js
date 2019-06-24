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
  currentGenreSelector,
  currentSearchQuerySelector,
  hasMorePagesSelector,
  srcSelector,
  moviesSelector,
} from '../../modules/app/appSelectors';
import { useFetchOnScroll } from '../../hooks';

const MovieContainer = ({
  isLoading, filter, currentPage, currentGenre,
  currentSearchQuery, movies, layout, getTopRatedMovies,
  getLatestMovies, getUpcomingMovies, getSearchMovies,
  getMoviesByGenre, src, hasMorePages,
}) => {
  useFetchOnScroll(
    isLoading, hasMorePages, filter, currentPage,
    getLatestMovies, getTopRatedMovies, getUpcomingMovies,
    getMoviesByGenre, currentGenre, getSearchMovies, currentSearchQuery,
  );
  return (
    <Movies
      page={currentPage}
      src={src}
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
  src: srcSelector(state),
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
  src: PropTypes.string,
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
  src: '',
  movies: [],
};

export default connect(mapStateToProps, actions)(MovieContainer);
