import { connect } from 'react-redux';
import Select from './Select';
import { fetchMoviesByGenre } from '../../../../../../modules/app/appActions';
import { genresSelector, filterSelector } from '../../../../../../modules/app/appSelectors';

const mapStateToProps = state => ({
  fetchedGenres: genresSelector(state),
  filter: filterSelector(state),
});

export default connect(mapStateToProps, { fetchMoviesByGenre })(Select);
