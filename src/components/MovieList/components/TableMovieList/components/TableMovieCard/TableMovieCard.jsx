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
      <div className={styles.card_image}>
        <img src={image} alt="Poster" />
      </div>
      <div className={styles.card_info}>
        <h2 className={styles.card_title}>{title}</h2>
        <Genres fontColor="#0aaee4" genres={genres} />
        <p className={styles.card_overview}>{checkDescriptionLength(overview)}</p>
        <div className={styles.card_rating}>
          <StarRating starsSelected={rating} />
          <NumRating fontColor="#0aaee4" rating={rating} />
        </div>
        <Button className="blueBtn">Watch Now</Button>
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
