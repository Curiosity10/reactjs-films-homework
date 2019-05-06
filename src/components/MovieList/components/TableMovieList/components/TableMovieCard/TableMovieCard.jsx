import React from 'react';
import PropTypes from 'prop-types';
import styles from './TableMovieCard.scss';
import NumRating from '../../../../../NumRating';
import Genres from '../../../../../Genres';
import Button from '../../../../../Button';
import StarRating from '../../../../../StarRating';

const TableMovieCard = ({ movie }) => {
  const {
    rating,
    title,
    genres,
    overview,
    image,
  } = movie;
  const checkDescriptionLength = description => (
    description.length > 500 ? `${description.slice(0, 500)}...` : description
  );
  return (
    <article className={styles.card}>
      <img src={image} alt="Poster" />
      <div className={styles.info}>
        <h2 className={styles.title}>{title}</h2>
        <Genres genres={genres} />
        <p className={styles.overview}>{checkDescriptionLength(overview)}</p>
        <div className={styles.rating}>
          <StarRating starsSelected={rating} />
          <NumRating rating={rating} />
        </div>
        <Button type="primary">Watch Now</Button>
      </div>
    </article>
  );
};

TableMovieCard.propTypes = {
  movie: PropTypes.shape({
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    overview: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default TableMovieCard;
