import React from 'react';
import PropTypes from 'prop-types';
import styles from './GridCard.scss';
import { OverlayCard, DefaultCard } from './components';

const GridCard = ({
  movie, isActive, changeActiveCard,
  toggleModal, fetchVideoSrc,
}) => {
  const {
    rating,
    title,
    genres,
    overview,
    image,
    id,
  } = movie;
  return (
    <article className={styles.card}>
      <img height={isActive ? '70%' : '100%'} src={image} alt="Poster" />
      { isActive
        ? (
          <DefaultCard
            id={id}
            title={title}
            rating={rating}
            changeActiveCard={changeActiveCard}
            genres={genres}
            toggleModal={toggleModal}
            fetchVideoSrc={fetchVideoSrc}
          />
        )
        : (
          <OverlayCard
            id={id}
            overview={overview}
            title={title}
            rating={rating}
            changeActiveCard={changeActiveCard}
            genres={genres}
            fetchVideoSrc={fetchVideoSrc}
            toggleModal={toggleModal}
          />
        )}
    </article>
  );
};

GridCard.propTypes = {
  movie: PropTypes.shape({
    rating: PropTypes.number,
    title: PropTypes.string,
    genres: PropTypes.array,
    overview: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
  changeActiveCard: PropTypes.func.isRequired,
  toggleModal: PropTypes.func,
  fetchVideoSrc: PropTypes.func,
};

GridCard.defaultProps = {
  toggleModal: () => {},
  fetchVideoSrc: () => {},
};

export default GridCard;
