import { connect } from 'react-redux';
import Hero from './Hero';
import { movieDetailsSelector, isLoadingSelector } from '../../modules/app/appSelectors';
import { fetchVideoKey } from '../../modules/app/appActions';

const mapStateToProps = state => ({
  movie: movieDetailsSelector(state),
  isLoading: isLoadingSelector(state),
});

export default connect(mapStateToProps, { fetchVideoKey })(Hero);
