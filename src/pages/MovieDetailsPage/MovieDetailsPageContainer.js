import { connect } from 'react-redux';
import MovieDetailsPage from './MovieDetailsPage';
import {
  fetchMovieDetails,
  fetchMoviesByFilter,
  fetchGenres,
  changeFilter,
} from '../../modules/app/appActions';
import uiActions from '../../modules/ui/uiActions';

export default connect(null, {
  fetchMovieDetails,
  fetchMoviesByFilter,
  fetchGenres,
  changeFilter,
  changeLayout: uiActions.changeLayout,
})(MovieDetailsPage);
