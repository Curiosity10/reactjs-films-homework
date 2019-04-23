import React from 'react';
import PropTypes from 'prop-types';
import Star from './components/Star';

const StarRating = (props) => {
  const {
    starsSelected,
  } = props;
  return (
    <>
      {[...Array(5)].map((n, i) => (
        <Star
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          isSelected={i < starsSelected}
        />
      ))}
    </>
  );
};

StarRating.propTypes = {
  starsSelected: PropTypes.number.isRequired,
};

export default StarRating;
