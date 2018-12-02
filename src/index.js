import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

import Signature from './components/Signature/index';

ReactDOM.render(<Signature name="Dzmitry Aleksandrouski" />, document.getElementById('app'));
export default hot(module)(Signature);
