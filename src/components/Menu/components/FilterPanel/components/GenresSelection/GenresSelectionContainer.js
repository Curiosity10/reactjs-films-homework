import { connect } from 'react-redux';
import GenresSelection from './GenresSelection';
import { fetchMoviesByGenre } from '../../../../../../modules/app/appActions';
import { genresSelector, filterSelector } from '../../../../../../modules/app/appSelectors';

const mapStateToProps = state => ({
  fetchedGenres: genresSelector(state),
  filter: filterSelector(state),
});

export default connect(mapStateToProps, { fetchMoviesByGenre })(GenresSelection);
