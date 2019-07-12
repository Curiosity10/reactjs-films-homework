import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames/bind';
import styles from './Hero.scss';
import StarRating from '../StarRating';
import NumRating from '../NumRating';
import Genres from '../Genres';
import Button from '../Button';
import Spinner from '../Spinner';

const cx = cn.bind(styles);

const Hero = ({
  movie,
  fetchVideoKey,
  toggleModal,
  isLoading,
}) => {
  const [showInfo, setShowInfo] = useState(true);

  const {
    title,
    id,
    genres,
    rating,
    runtime,
    overview = '',
    image,
  } = movie;

  return (
    <div className={styles.container}>
      { isLoading ? <Spinner /> : (
        <section className={styles.hero} style={{ backgroundImage: `url(${image})` }}>
          <div className={styles.movieInfo}>
            <h2 className={styles.title}>{ title }</h2>
            <div className={styles.wrapper}>
              <Genres genres={genres} />
              {runtime !== '0h 0m' && <span className={styles.duration}>{runtime}</span>}
            </div>
            { rating ? (
              <div className={styles.rating}>
                <StarRating
                  starsSelected={rating}
                />
                <NumRating rating={rating} />
              </div>
            ) : null
            }
          </div>
          <div className={styles.movieDescription}>
            <p className={cx({ description: showInfo, hiddenDesc: !showInfo })}>
              {`${overview.slice(0, 221)} ...`}
            </p>
            <div className={styles.buttons}>
              <Button
                type="primary"
                handleClick={
                  () => {
                    fetchVideoKey(id);
                    toggleModal(true);
                  }}
              >
                Watch Now
              </Button>
              <Button type="ghost" handleClick={() => setShowInfo(!showInfo)}>View Info</Button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

/* istanbul ignore next */
function areEqual(prevProps, nextProps) {
  return prevProps.movie.image === nextProps.movie.image;
}

Hero.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    genres: PropTypes.array,
    rating: PropTypes.number,
    runtime: PropTypes.string,
    overview: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
  fetchVideoKey: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default memo(Hero, areEqual);
