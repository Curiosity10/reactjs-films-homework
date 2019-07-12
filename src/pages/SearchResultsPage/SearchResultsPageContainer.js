import { connect } from 'react-redux';
import SearchResultsPage from './SearchResultsPage';
import { fetchGenres, fetchMoviesByFilter, changeFilter } from '../../modules/app/appActions';
import uiActions from '../../modules/ui/uiActions';

export const mapDispatchToProps = dispatch => ({
  fetchData: () => {
    dispatch(fetchGenres());
    dispatch(fetchMoviesByFilter());
  },
  changeFilter: () => dispatch(changeFilter('popular')),
  changeLayout: () => dispatch(uiActions.changeLayout()),
});

export default connect(null, mapDispatchToProps)(SearchResultsPage);
