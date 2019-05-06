import React from 'react';
import PropTypes from 'prop-types';
import styles from './GridMovieCard.scss';
import NumRating from '../../../../../NumRating';
import Genres from '../../../../../Genres';
import Button from '../../../../../Button';

const GridMovieCard = ({ movie, activeCard, changeActiveCard }) => {
  const {
    rating,
    title,
    genres,
    overview,
    image,
    id,
  } = movie;
  const checkDescriptionLength = description => (
    description.length > 215 ? `${description.slice(0, 215)}...` : description
  );
  const OverlayCard = () => (
    <div className={styles.overlay}>
      <button
        aria-label="Close"
        onClick={() => changeActiveCard(0)}
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
        {checkDescriptionLength(overview)}
      </p>
      <Button type="primary">Watch Now</Button>
    </div>
  );
  const DefaultCard = () => (
    <>
      <div className={styles.onHover}>
        <button aria-label="Watch" className={styles.btnWatch} type="button">
          <span> Watch Now </span>
        </button>
        <Button
          handleClick={() => changeActiveCard(id)}
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
  return (
    <article className={styles.card}>
      <img height={activeCard !== id ? '75%' : '100%'} src={image} alt="Poster" />
      { activeCard !== id ? <DefaultCard /> : <OverlayCard /> }
    </article>
  );
};

GridMovieCard.propTypes = {
  movie: PropTypes.shape({
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    overview: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  activeCard: PropTypes.number.isRequired,
  changeActiveCard: PropTypes.func.isRequired,
};

export default GridMovieCard;
