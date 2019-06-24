import { connect } from 'react-redux';
import ErrorBoundry from './ErrorBoundry';
import { errorMessageSelector } from '../../modules/app/appSelectors';

const mapStateToProps = state => ({ errorMessage: errorMessageSelector(state) });

export default connect(mapStateToProps)(ErrorBoundry);
