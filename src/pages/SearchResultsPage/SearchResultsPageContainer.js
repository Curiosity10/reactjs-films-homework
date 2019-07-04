import { connect } from 'react-redux';
import SearchResultsPage from './SearchResultsPage';
import { fetchGenres, fetchLatestMovies } from '../../modules/app/appActions';

export const mapDispatchToProps = dispatch => ({
  fetchData: () => {
    dispatch(fetchGenres());
    dispatch(fetchLatestMovies());
  },
});

export default connect(null, mapDispatchToProps)(SearchResultsPage);
