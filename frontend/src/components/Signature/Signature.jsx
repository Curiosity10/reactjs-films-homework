import React from 'react';
import PropTypes from 'prop-types';

import styles from './Signature.sass';

const Signature = ({ name }) => <h1 className={styles.header}>{ name }</h1>;

Signature.propTypes = {
  name: PropTypes.string,
};

Signature.defaultProps = {
  name: 'Dzmitry Aleksandrouski',
};

export default Signature;
