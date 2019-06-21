import { connect } from 'react-redux';
import TableCard from './TableCard';
import { fetchVideoSrc } from '../../../../../../modules/app';

export default connect(null, { fetchVideoSrc })(TableCard);
