import React, { useState } from 'react';
import styles from './Hero.scss';
import StarRating from '../StarRating';
import { getMovieInfo } from '../../utils/tbdbApiService';
import NumRating from '../NumRating';
import Genres from '../Genres';
import Button from '../Button';

const Hero = () => {
  const [showInfo, setShowInfo] = useState(true);
  const [movie] = useState(getMovieInfo());
  const {
    title,
    genres,
    rating,
    runtime,
    overview,
    image,
  } = movie;
  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.hero_movieInfo}>
        <h2 className={styles.hero_title}>{ title }</h2>
        <div className={styles.hero_wrapper}>
          <Genres genres={genres} />
          <span className={styles.hero_duration}>{runtime}</span>
        </div>
        <div className={styles.hero_rating}>
          <StarRating
            starsSelected={rating}
          />
          <NumRating rating={rating} />
        </div>
      </div>
      <div className={styles.hero_movieDescription}>
        <p className={showInfo ? styles.hero_description : styles.hero_hiddenDesc}>
          {`${overview.slice(0, 220)} ...` }
        </p>
        <div className={styles.hero_buttons}>
          <Button className="blueBtn">Watch Now</Button>
          <Button
            handleClick={() => setShowInfo(!showInfo)}
            className="transparentBtn"
          >
            View Info
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
