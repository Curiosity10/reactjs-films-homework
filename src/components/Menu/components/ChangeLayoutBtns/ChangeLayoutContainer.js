import { connect } from 'react-redux';
import ChangeLayoutBtns from './ChangeLayoutBtns';
import { changeLayout } from '../../../../modules/ui';

export default connect(null, { changeLayout })(ChangeLayoutBtns);
