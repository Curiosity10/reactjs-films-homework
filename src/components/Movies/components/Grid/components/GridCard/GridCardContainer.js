import { connect } from 'react-redux';
import GridCard from './GridCard';
import { fetchVideoSrc } from '../../../../../../modules/app/appActions';

export default connect(null, { fetchVideoSrc })(GridCard);
