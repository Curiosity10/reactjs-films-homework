import { connect } from 'react-redux';
import TableCard from './TableCard';
import { fetchVideoKey } from '../../../../../../modules/app/appActions';

export default connect(null, { fetchVideoKey })(TableCard);
