import { connect } from 'react-redux';
import GridCard from './GridCard';
import { fetchvideoKey } from '../../../../../../modules/app/appActions';

export default connect(null, { fetchvideoKey })(GridCard);
