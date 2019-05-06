import React, { useState } from 'react';
import cn from 'classnames/bind';
import styles from './Hero.scss';
import StarRating from '../StarRating';
import { getMovieInfo } from '../../utils/tbdbApiService';
import NumRating from '../NumRating';
import Genres from '../Genres';
import Button from '../Button';

const cx = cn.bind(styles);
const Hero = () => {
  const [showInfo, setShowInfo] = useState(true);
  const movie = getMovieInfo();
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
      <div className={styles.movieInfo}>
        <h2 className={styles.title}>{ title }</h2>
        <div className={styles.wrapper}>
          <Genres genres={genres} />
          <span className={styles.duration}>{runtime}</span>
        </div>
        <div className={styles.rating}>
          <StarRating
            starsSelected={rating}
          />
          <NumRating rating={rating} />
        </div>
      </div>
      <div className={styles.movieDescription}>
        <p className={cx({ description: showInfo, hiddenDesc: !showInfo })}>
          {`${overview.slice(0, 221)} ...`}
        </p>
        <div className={styles.buttons}>
          <Button type="primary">Watch Now</Button>
          <Button
            handleClick={() => setShowInfo(!showInfo)}
            type="ghost"
          >
            View Info
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
