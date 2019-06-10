import React from 'react';
import PropTypes from 'prop-types';
import styles from './TableCard.scss';
import NumRating from '../../../../../NumRating';
import Genres from '../../../../../Genres';
import Button from '../../../../../Button';
import StarRating from '../../../../../StarRating';
import truncate from '../../../../../../utils/truncate';

const TableCard = ({ movie }) => {
  const {
    rating,
    title,
    genres,
    overview,
    image,
  } = movie;
  const maxLength = 500;
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
        <Button type="primary">Watch Now</Button>
      </div>
    </article>
  );
};

TableCard.propTypes = {
  movie: PropTypes.shape({
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    overview: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default TableCard;
