import React from 'react';
import PropTypes from 'prop-types';
import styles from './Genres.scss';

const Genres = (props) => {
  const { genres, fontColor, fontSize } = props;
  const fontStyle = {
    color: fontColor,
    fontSize,
  };
  return (
    genres.map(genre => (
      <span style={fontStyle} key={genre.id} className={styles.genre}>
        {genre.name}
      </span>
    )));
};

Genres.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
  color: PropTypes.string,
  fontSize: PropTypes.string,
};

export default Genres;
