import { connect } from 'react-redux';
import ChangeLayoutBtns from './ChangeLayoutBtns';
import actions from '../../../../modules/ui/uiActions';

export default connect(null, actions)(ChangeLayoutBtns);
