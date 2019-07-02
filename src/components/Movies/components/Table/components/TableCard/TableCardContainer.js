import { connect } from 'react-redux';
import TableCard from './TableCard';
import { fetchvideoKey } from '../../../../../../modules/app/appActions';

export default connect(null, { fetchvideoKey })(TableCard);
