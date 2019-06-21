import { connect } from 'react-redux';
import FilterPanel from './FilterPanel';
import {
  fetchTopRatedMovies, fetchLatestMovies, fetchUpcomingMovies, changeFilter,
  fetchedGenresSelector, filterSelector,
} from '../../../../modules/app';

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
