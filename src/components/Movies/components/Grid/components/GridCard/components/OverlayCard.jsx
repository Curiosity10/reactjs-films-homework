import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from '../GridCard.scss';
import Genres from '../../../../../../Genres';
import NumRating from '../../../../../../NumRating';
import Button from '../../../../../../Button';
import truncate from '../../../../../utils/truncate';
import { MAX_OVERLAY_CARD_DESC_LENGTH } from '../../../../../utils/constants';

const OverlayCard = ({
  changeActiveCard, id, title, genres, rating, overview, toggleModal, fetchVideoKey,
}) => {
  const handleClick = useCallback(() => {
    fetchVideoKey(id);
    toggleModal(true);
  }, [toggleModal, id, fetchVideoKey]);
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
          <h3 title={title} className={styles.title}>{title}</h3>
          <Genres genres={genres} />
        </div>
        <NumRating rating={rating} />
      </div>
      <p className={styles.description}>
        {truncate(overview, MAX_OVERLAY_CARD_DESC_LENGTH)}
      </p>
      <Button type="primary" handleClick={handleClick}>Watch Now</Button>
    </div>
  );
};

OverlayCard.propTypes = {
  id: PropTypes.number.isRequired,
  rating: PropTypes.number,
  title: PropTypes.string.isRequired,
  genres: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
  ]),
  overview: PropTypes.string.isRequired,
  changeActiveCard: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  fetchVideoKey: PropTypes.func.isRequired,
};

OverlayCard.defaultProps = {
  rating: null,
  genres: [],
};

export default OverlayCard;
