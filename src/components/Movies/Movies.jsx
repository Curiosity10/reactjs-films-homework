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
  isLoading, movies, layout, videoKey, page,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const isMoviesExist = movies.length !== 0;
  let renderContent;

  if (!isMoviesExist) {
    renderContent = <h2>Sorry, no movies found.</h2>;
  } else if (layout === 'grid') {
    renderContent = <Grid toggleModal={setModalOpen} movies={movies} />;
  } else if (layout === 'table') {
    renderContent = <Table toggleModal={setModalOpen} movies={movies} />;
  }

  return (
    <>
      {
        <main className={cx({ container: true, gridMovieList: (layout === 'grid' && isMoviesExist), tableMovieList: (layout === 'table' && isMoviesExist) })}>
          { renderContent }
          {page > 1 ? <a className={styles.toTopBtn} type="button" href="#menu">&#x2B06;</a> : null}
        </main>
      }
      {isModalOpen ? (
        <TrailerModal
          isLoading={isLoading}
          toggleModal={setModalOpen}
          videoKey={videoKey}
        />
      ) : null}
      { isLoading ? <Spinner /> : null }
    </>
  );
};

Movies.propTypes = {
  isLoading: PropTypes.bool,
  movies: PropTypes.arrayOf(PropTypes.object),
  layout: PropTypes.string,
  videoKey: PropTypes.string,
  page: PropTypes.number,
};

Movies.defaultProps = {
  movies: [],
  isLoading: false,
  layout: 'Grid',
  videoKey: '',
  page: 1,
};

export default Movies;
