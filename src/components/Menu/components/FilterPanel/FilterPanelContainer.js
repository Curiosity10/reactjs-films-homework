import { connect } from 'react-redux';
import FilterPanel from './FilterPanel';
import {
  fetchLatestMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
  changeFilter,
} from '../../../../modules/app/appActions';
import { genresSelector, filterSelector } from '../../../../modules/app/appSelectors';

const mapStateToProps = state => ({
  fetchedGenres: genresSelector(state),
  filter: filterSelector(state),
});

const actions = {
  fetchLatestMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
  changeFilter,
};

export default connect(mapStateToProps, actions)(FilterPanel);
