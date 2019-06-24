import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames/bind';
import styles from './Movies.scss';
import Grid from './components/Grid';
import Table from './components/Table';
import Spinner from '../Spinner';
import TrailerModal from './components/TrailerModal';

const cx = cn.bind(styles);

const Movies = ({
  isLoading, movies, layout, src, page,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const isMoviesExist = movies.length !== 0;
  let moviesList;

  if (!isMoviesExist) {
    moviesList = <p className={styles.notFound}>Sorry, no movies found.</p>;
  } else if (layout === 'grid') {
    moviesList = <Grid toggleModal={setModalOpen} movies={movies} />;
  } else if (layout === 'table') {
    moviesList = <Table toggleModal={setModalOpen} movies={movies} />;
  }

  return (
    <>
      {
        <main className={
          cx({
            container: true,
            gridMovieList: (layout === 'grid' && isMoviesExist),
            tableMovieList: (layout === 'table' && isMoviesExist),
          })}
        >
          { moviesList }
          {page > 1 && <a className={styles.toTopBtn} type="button" href="#menu">&#x2B06;</a>}
        </main>
      }
      {isModalOpen && (
        <TrailerModal
          isLoading={isLoading}
          toggleModal={setModalOpen}
          src={src}
        />
      )}
      { isLoading && <Spinner /> }
    </>
  );
};

Movies.propTypes = {
  isLoading: PropTypes.bool,
  movies: PropTypes.arrayOf(PropTypes.object),
  layout: PropTypes.string,
  src: PropTypes.string,
  page: PropTypes.number,
};

Movies.defaultProps = {
  movies: [],
  isLoading: false,
  layout: 'Grid',
  src: '',
  page: 1,
};

export default Movies;
