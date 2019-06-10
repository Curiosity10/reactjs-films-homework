import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from '../GridCard.scss';
import Genres from '../../../../../../Genres';
import NumRating from '../../../../../../NumRating';
import Button from '../../../../../../Button';


const DefaultCard = ({
  changeActiveCard, title, genres, rating, id,
}) => (
  <>
    <div className={styles.onHover}>
      <button aria-label="Watch" className={styles.btnWatch} type="button">
        <span> Watch Now </span>
      </button>
      <Button
        handleClick={useCallback(() => changeActiveCard(id), [changeActiveCard, id])}
        type="ghost"
      >
        View Info
      </Button>
    </div>
    <div className={styles.info}>
      <div>
        <h3 className={styles.title}>{title}</h3>
        <p>
          <Genres genres={genres} />
        </p>
      </div>
      <NumRating rating={rating} />
    </div>
  </>
);

DefaultCard.propTypes = {
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  genres: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
  ]).isRequired,
  changeActiveCard: PropTypes.func.isRequired,
};

export default DefaultCard;
