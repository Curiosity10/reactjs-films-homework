import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

import Signature from './Signature';

ReactDOM.render(<Signature name="Dzmitry Aleksandrouski" />, document.getElementById('app') || document.createElement('div'));
export default hot(module)(Signature);
