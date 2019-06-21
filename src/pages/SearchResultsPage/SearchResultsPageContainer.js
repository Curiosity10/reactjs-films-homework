import { connect } from 'react-redux';
import SearchResultsPage from './SearchResultsPage';
import { fetchGenres, fetchLatestMovies } from '../../modules/app';

export default connect(null, { fetchLatestMovies, fetchGenres })(SearchResultsPage);
