import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from '../GridCard.scss';
import Genres from '../../../../../../Genres';
import NumRating from '../../../../../../NumRating';
import Button from '../../../../../../Button';

const DefaultCard = ({
  changeActiveCard, title, genres, rating, id, toggleModal, fetchVideoSrc,
}) => (
  <>
    <div className={styles.onHover}>
      <button
        aria-label="Watch"
        className={styles.btnWatch}
        type="button"
        onClick={useCallback(() => {
          fetchVideoSrc(id);
          toggleModal(true);
        }, [toggleModal, id, fetchVideoSrc])}
      >
        <span> Watch Now </span>
      </button>
      <Button type="ghost" handleClick={useCallback(() => changeActiveCard(id), [changeActiveCard, id])}>View Info</Button>
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
  rating: PropTypes.number,
  title: PropTypes.string,
  id: PropTypes.number,
  genres: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
  ]).isRequired,
  changeActiveCard: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  fetchVideoSrc: PropTypes.func.isRequired,
};

DefaultCard.defaultProps = {
  rating: null,
  title: '',
  id: Math.random() * 1000,
};

export default DefaultCard;
