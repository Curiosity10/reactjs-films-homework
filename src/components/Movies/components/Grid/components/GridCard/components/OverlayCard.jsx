import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from '../GridCard.scss';
import Genres from '../../../../../../Genres';
import NumRating from '../../../../../../NumRating';
import Button from '../../../../../../Button';


const OverlayCard = ({
  changeActiveCard, title, genres, rating, truncate, overview,
}) => (
  <div className={styles.overlay}>
    <button
      aria-label="Close"
      onClick={useCallback(() => changeActiveCard(0), [changeActiveCard])}
      type="button"
      className={styles.close}
    />
    <div className={styles.wrapper}>
      <div>
        <h3 className={styles.title}>{title}</h3>
        <Genres genres={genres} />
      </div>
      <NumRating rating={rating} />
    </div>
    <p className={styles.description}>
      {truncate(overview)}
    </p>
    <Button type="primary">Watch Now</Button>
  </div>
);

OverlayCard.propTypes = {
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
  ]).isRequired,
  overview: PropTypes.string.isRequired,
  changeActiveCard: PropTypes.func.isRequired,
  truncate: PropTypes.func.isRequired,
};

export default OverlayCard;
