import React from 'react';
import PropTypes from 'prop-types';
import styles from './GridMovieCard.scss';
import NumRating from '../../../../../NumRating';
import Genres from '../../../../../Genres';
import Icon from '../../../../../Icon';
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
  const checkTitleLength = name => (
    name.length > 20 ? `${name.toUpperCase().slice(0, 20)}...` : name
  );
  const checkDescriptionLength = description => (
    description.length > 320 ? `${description.slice(0, 320)}...` : description
  );
  const OverlayCard = () => (
    <div className={styles.overlay}>
      <button
        aria-label="Close"
        onClick={() => changeActiveCard(0)}
        type="button"
        className={styles.overlay_close}
      >
        <Icon name="close" color="#ffffff" />
      </button>
      <div className={styles.overlay_wrapper}>
        <div>
          <h3 className={styles.overlay_title}>{checkTitleLength(title)}</h3>
          <Genres fontColor="#0aaee4" fontSize="0.8rem" genres={genres} />
        </div>
        <NumRating fontColor="#0aaee4" rating={rating} />
      </div>
      <p className={styles.overlay_description}>
        {checkDescriptionLength(overview)}
      </p>
      <Button className="blueBtn">Watch Now</Button>
    </div>
  );
  const DefaultCard = () => (
    <>
      <div className={styles.onHover}>
        <button aria-label="Watch" className={styles.btnWatch} type="button">
          <Icon name="play" color="#0aaee4" />
          <span> Watch Now </span>
        </button>
        <Button
          handleClick={() => changeActiveCard(id)}
          className="transparentBtn"
        >
          View Info
        </Button>
      </div>
      <div className={styles.info}>
        <div>
          <h3 className={styles.info_title}>{checkTitleLength(title)}</h3>
          <p>
            <Genres fontColor="#0aaee4" fontSize="0.8rem" genres={genres} />
          </p>
        </div>
        <NumRating fontColor="#0aaee4" rating={rating} />
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
