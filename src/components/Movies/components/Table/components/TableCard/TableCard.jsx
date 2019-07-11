import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './TableCard.scss';
import NumRating from '../../../../../NumRating';
import Genres from '../../../../../Genres';
import Button from '../../../../../Button';
import StarRating from '../../../../../StarRating';
import truncate from '../../../../utils/truncate';
import { MAX_TABLE_CARD_DESC_LENGTH } from '../../../../utils/constants';

const TableCard = ({ movie, fetchVideoKey, toggleModal }) => {
  const {
    id,
    rating,
    title,
    genres,
    overview,
    image,
  } = movie;
  const handleClick = useCallback(() => {
    fetchVideoKey(id);
    toggleModal(true);
  }, [toggleModal, id, fetchVideoKey]);
  return (
    <article className={styles.card}>
      <img src={image} alt="Poster" />
      <div className={styles.info}>
        <h2 className={styles.title}>{title}</h2>
        <Genres genres={genres} />
        <p className={styles.overview}>{truncate(overview, MAX_TABLE_CARD_DESC_LENGTH)}</p>
        <div className={styles.rating}>
          <StarRating starsSelected={rating} />
          <NumRating rating={rating} />
        </div>
        <Button type="primary" handleClick={handleClick}>Watch Now</Button>
      </div>
    </article>
  );
};

TableCard.propTypes = {
  movie: PropTypes.shape({
    rating: PropTypes.number,
    title: PropTypes.string,
    genres: PropTypes.array,
    overview: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  }).isRequired,
  toggleModal: PropTypes.func,
  fetchVideoKey: PropTypes.func,
};

TableCard.defaultProps = {
  toggleModal: () => {},
  fetchVideoKey: () => {},
};

export default TableCard;
