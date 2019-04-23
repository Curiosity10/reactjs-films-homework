import React from 'react';
import PropTypes from 'prop-types';
import styles from './NumRating.scss';

const NumRating = (props) => {
  const { rating, fontColor } = props;
  const fontStyle = {
    color: fontColor,
  };
  return (
    <span style={fontStyle} className={styles.numRating}>
      {rating}
    </span>
  );
};


NumRating.propTypes = {
  rating: PropTypes.number.isRequired,
  fontColor: PropTypes.string,
};

NumRating.defaultProps = {
  fontColor: '#fff',
};

export default NumRating;
