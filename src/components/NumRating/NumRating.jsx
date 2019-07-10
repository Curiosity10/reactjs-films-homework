import React from 'react';
import PropTypes from 'prop-types';
import styles from './NumRating.scss';

const NumRating = (props) => {
  const { rating } = props;

  return (
    <>
      {
        rating
          ? (
            <span className={styles.numRating}>
              {rating}
            </span>
          )
          : null
      }
    </>
  );
};


NumRating.propTypes = {
  rating: PropTypes.number,
};

NumRating.defaultProps = {
  rating: null,
};

export default NumRating;
