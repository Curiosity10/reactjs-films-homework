import { connect } from 'react-redux';
import ErrorBoundary from './ErrorBoundary';
import { errorMessageSelector } from '../../modules/app/appSelectors';

const mapStateToProps = state => ({ errorMessage: errorMessageSelector(state) });

export default connect(mapStateToProps)(ErrorBoundary);
