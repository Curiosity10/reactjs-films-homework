import { connect } from 'react-redux';
import FilterPanel from './FilterPanel';
import {
  fetchMoviesByFilter,
  changeFilter,
} from '../../../../modules/app/appActions';
import { genresSelector, filterSelector } from '../../../../modules/app/appSelectors';

const mapStateToProps = state => ({
  fetchedGenres: genresSelector(state),
  filter: filterSelector(state),
});

const actions = {
  fetchMoviesByFilter,
  changeFilter,
};

export default connect(mapStateToProps, actions)(FilterPanel);
