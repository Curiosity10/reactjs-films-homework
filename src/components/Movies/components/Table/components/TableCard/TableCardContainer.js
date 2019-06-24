import { connect } from 'react-redux';
import TableCard from './TableCard';
import { fetchVideoSrc } from '../../../../../../modules/app/appActions';

export default connect(null, { fetchVideoSrc })(TableCard);
