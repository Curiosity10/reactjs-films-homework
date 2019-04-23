import React from 'react';
import PropTypes from 'prop-types';
import styles from './Star.scss';

const Star = ({ isSelected }) => (
  <div
    className={isSelected ? `${styles.star} ${styles.starSelected}` : styles.star}
  />
);

Star.propTypes = {
  isSelected: PropTypes.bool,
};

Star.defaultProps = {
  isSelected: false,
};

export default Star;
