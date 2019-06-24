import { connect } from 'react-redux';
import SearchResultsPage from './SearchResultsPage';
import { fetchGenres, fetchLatestMovies } from '../../modules/app/appActions';

export default connect(null, { fetchLatestMovies, fetchGenres })(SearchResultsPage);
