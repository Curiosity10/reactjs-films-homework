import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from './TableCard.scss';
import NumRating from '../../../../../NumRating';
import Genres from '../../../../../Genres';
import Button from '../../../../../Button';
import StarRating from '../../../../../StarRating';
import { truncate } from '../../../../../../utils';

const TableCard = ({ movie, fetchvideoKey, toggleModal }) => {
  const {
    id,
    rating,
    title,
    genres,
    overview,
    image,
  } = movie;
  const maxLength = 500;
  const handleClick = useCallback(() => {
    fetchvideoKey(id);
    toggleModal(true);
  }, [toggleModal, id, fetchvideoKey]);
  return (
    <article className={styles.card}>
      <img src={image} alt="Poster" />
      <div className={styles.info}>
        <h2 className={styles.title}>{title}</h2>
        <Genres genres={genres} />
        <p className={styles.overview}>{truncate(overview, maxLength)}</p>
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
  fetchvideoKey: PropTypes.func,
};

TableCard.defaultProps = {
  toggleModal: () => {},
  fetchvideoKey: () => {},
};

export default TableCard;
