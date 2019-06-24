import { connect } from 'react-redux';
import FilterPanel from './FilterPanel';
import {
  fetchTopRatedMovies,
  fetchLatestMovies,
  fetchUpcomingMovies,
  changeFilter,
} from '../../../../modules/app/appActions';
import { fetchedGenresSelector, filterSelector } from '../../../../modules/app/appSelectors';

const mapStateToProps = state => ({
  fetchedGenres: fetchedGenresSelector(state),
  filter: filterSelector(state),
});

const actions = {
  fetchTopRatedMovies,
  fetchLatestMovies,
  fetchUpcomingMovies,
  changeFilter,
};

export default connect(mapStateToProps, actions)(FilterPanel);
