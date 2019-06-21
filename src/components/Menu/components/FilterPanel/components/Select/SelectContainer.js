import { connect } from 'react-redux';
import Select from './Select';
import { fetchMoviesByGenre, fetchedGenresSelector, filterSelector } from '../../../../../../modules/app';

const mapStateToProps = state => ({
  fetchedGenres: fetchedGenresSelector(state),
  filter: filterSelector(state),
});

export default connect(mapStateToProps, { fetchMoviesByGenre })(Select);
