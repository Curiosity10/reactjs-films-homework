import { connect } from 'react-redux';
import Select from './Select';
import { fetchMoviesByGenre } from '../../../../../../modules/app/appActions';
import { fetchedGenresSelector, filterSelector } from '../../../../../../modules/app/appSelectors';

const mapStateToProps = state => ({
  fetchedGenres: fetchedGenresSelector(state),
  filter: filterSelector(state),
});

export default connect(mapStateToProps, { fetchMoviesByGenre })(Select);
