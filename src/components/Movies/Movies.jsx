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
  isLoading, movies, layout, videoSrc, page, errorMsg,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const isMoviesExist = movies.length !== 0;
  let moviesList;

  if (errorMsg) {
    moviesList = (
      <p className={styles.errorMsg}>
       Sorry, something went wrong.
        { errorMsg }
      </p>
    );
  } else if (!isMoviesExist && !isLoading) {
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
            gridMovieList: (layout === 'grid' && isMoviesExist && !errorMsg),
            tableMovieList: (layout === 'table' && isMoviesExist && !errorMsg),
          })}
        >
          { moviesList }
          {page > 1 && <a className={styles.toTopBtn} type="button" href="#top">&#x2b9d;</a>}
        </main>
      }
      {isModalOpen && (
        <TrailerModal
          isLoading={isLoading}
          toggleModal={setModalOpen}
          videoSrc={videoSrc}
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
  videoSrc: PropTypes.string,
  page: PropTypes.number,
  errorMsg: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

Movies.defaultProps = {
  movies: [],
  isLoading: false,
  layout: 'Grid',
  videoSrc: '',
  page: 1,
  errorMsg: '',
};

export default Movies;
