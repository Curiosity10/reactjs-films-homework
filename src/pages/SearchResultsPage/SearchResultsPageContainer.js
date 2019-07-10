import { connect } from 'react-redux';
import SearchResultsPage from './SearchResultsPage';
import { fetchGenres, fetchMoviesByFilter } from '../../modules/app/appActions';

export const mapDispatchToProps = dispatch => ({
  fetchData: () => {
    dispatch(fetchGenres());
    dispatch(fetchMoviesByFilter());
  },
});

export default connect(null, mapDispatchToProps)(SearchResultsPage);
