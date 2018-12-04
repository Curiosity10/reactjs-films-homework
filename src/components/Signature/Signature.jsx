import React from 'react';
import PropTypes from 'prop-types';

import styles from './Signature.scss';

const Signature = ({ name }) => <h1 className={styles.header}>{ name }</h1>;

Signature.propTypes = {
  name: PropTypes.string.isRequired,
};

Signature.defaultProps = {
  name: 'Dzmitry Aleksandrouski',
};

export default Signature;
