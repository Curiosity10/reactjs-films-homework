import React from 'react';
import PropTypes from 'prop-types';
import styles from './NumRating.scss';

const NumRating = (props) => {
  const { rating } = props;
  return (
    <span className={styles.numRating}>
      {rating}
    </span>
  );
};


NumRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default NumRating;
