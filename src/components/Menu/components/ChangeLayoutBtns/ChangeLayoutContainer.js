import { connect } from 'react-redux';
import ChangeLayoutBtns from './ChangeLayoutBtns';
import { changeLayout } from '../../../../modules/ui/uiActions';

export default connect(null, { changeLayout })(ChangeLayoutBtns);
