import React from 'react';
import PropTypes from 'prop-types';
import styles from './Genres.scss';

const Genres = (props) => {
  const { genres } = props;

  return (
    genres.map(genre => (
      <span key={genre.id} className={styles.genre}>
        {genre.name}
      </span>
    )));
};

Genres.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.object),
};

Genres.defaultProps = {
  genres: [],
};

export default Genres;
