import React from 'react';
import PropTypes from 'prop-types';
import styles from './GridCard.scss';
import { OverlayCard, DefaultCard } from './components';

const GridCard = ({ movie, isActive, changeActiveCard }) => {
  const {
    rating,
    title,
    genres,
    overview,
    image,
    id,
  } = movie;
  const maxLength = 215;
  const truncate = description => (
    description.length > maxLength ? `${description.slice(0, maxLength)}...` : description
  );
  return (
    <article className={styles.card}>
      <img height={isActive ? '75%' : '100%'} src={image} alt="Poster" />
      { isActive
        ? (
          <DefaultCard
            id={id}
            title={title}
            rating={rating}
            changeActiveCard={changeActiveCard}
            genres={genres}
          />
        )
        : (
          <OverlayCard
            overview={overview}
            truncate={truncate}
            title={title}
            rating={rating}
            changeActiveCard={changeActiveCard}
            genres={genres}
          />
        )}
    </article>
  );
};

GridCard.propTypes = {
  movie: PropTypes.shape({
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    overview: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
  changeActiveCard: PropTypes.func.isRequired,
};

export default GridCard;
