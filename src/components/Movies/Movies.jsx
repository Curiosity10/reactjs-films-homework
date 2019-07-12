import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames/bind';
import styles from './Movies.scss';
import Grid from './components/Grid';
import Table from './components/Table';
import Spinner from '../Spinner';
import TrailerModal from './components/TrailerModal';

const cx = cn.bind(styles);

const Movies = ({
  isLoading, movies, layout, videoSrc, page, errorMsg, isModalOpen, toggleModal,
}) => {
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
    moviesList = <Grid toggleModal={toggleModal} movies={movies} />;
  } else if (layout === 'table') {
    moviesList = <Table toggleModal={toggleModal} movies={movies} />;
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
          {
            page > 1 && (
              <button
                onClick={/* istanbul ignore next */ () => window.scrollTo(0, 0)}
                className={styles.toTopBtn}
                type="button"
              >
                  &#x2191;
              </button>
            )
          }
        </main>
      }
      {isModalOpen && (
        <TrailerModal
          isLoading={isLoading}
          toggleModal={toggleModal}
          videoSrc={videoSrc}
        />
      )}
      { isLoading && <Spinner /> }
    </>
  );
};

Movies.propTypes = {
  isLoading: PropTypes.bool,
  isModalOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
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
