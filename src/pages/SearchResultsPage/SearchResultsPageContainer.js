import { connect } from 'react-redux';
import SearchResultsPage from './SearchResultsPage';
import {
  fetchGenres,
  fetchMoviesByFilter,
  changeFilter,
  fetchSearchMovies,
  fetchMoviesByGenre,
} from '../../modules/app/appActions';

const actions = {
  fetchGenres,
  fetchMoviesByFilter,
  changeFilter,
  fetchSearchMovies,
  fetchMoviesByGenre,
};

export default connect(null, actions)(SearchResultsPage);
