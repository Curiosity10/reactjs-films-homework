import { connect } from 'react-redux';
import GridCard from './GridCard';
import { fetchVideoKey } from '../../../../../../modules/app/appActions';

export default connect(null, { fetchVideoKey })(GridCard);
