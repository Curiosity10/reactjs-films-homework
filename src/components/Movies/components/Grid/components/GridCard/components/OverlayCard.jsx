import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from '../GridCard.scss';
import Genres from '../../../../../../Genres';
import NumRating from '../../../../../../NumRating';
import Button from '../../../../../../Button';
import { truncate } from '../../../../../../../utils';

const OverlayCard = ({
  changeActiveCard, id, title, genres, rating, overview, toggleModal, fetchVideoSrc,
}) => {
  const maxLength = 180;
  const handleClick = useCallback(() => {
    fetchVideoSrc(id);
    toggleModal(true);
  }, [toggleModal, id, fetchVideoSrc]);
  return (
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
        {truncate(overview, maxLength)}
      </p>
      <Button type="primary" handleClick={handleClick}>Watch Now</Button>
    </div>
  );
};

OverlayCard.propTypes = {
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
  ]).isRequired,
  overview: PropTypes.string.isRequired,
  changeActiveCard: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  fetchVideoSrc: PropTypes.func.isRequired,
};

export default OverlayCard;
