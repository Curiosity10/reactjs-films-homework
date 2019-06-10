import React from 'react';
import PropTypes from 'prop-types';
import Star from './components/Star';

const StarRating = (props) => {
  const {
    starsSelected,
  } = props;
  return (
    <>
      {[...Array(Math.round(starsSelected))].map((n, i) => (
        <Star
          // eslint-disable-next-line react/no-array-index-key
          key={i}
        />
      ))}
    </>
  );
};

StarRating.propTypes = {
  starsSelected: PropTypes.number.isRequired,
};

export default StarRating;
