import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import { fetchSearchMovies, changeFilter } from '../../../../modules/app/appActions';

const actions = {
  fetchSearchMovies,
  changeFilter,
};

export default connect(null, actions)(SearchForm);
