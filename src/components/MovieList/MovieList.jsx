import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './MovieList.scss';
import GridMovieList from './components/GridMovieList';
import TableMovieList from './components/TableMovieList';

const MovieList = ({ context }) => {
  const { movies, layout } = useContext(context);
  return (
    <main className={layout === 'grid' ? styles.gridMovieList : styles.tableMovieList}>
      {
        layout === 'grid' ? <GridMovieList movies={movies} /> : <TableMovieList movies={movies} />
      }
    </main>
  );
};

MovieList.propTypes = {
  context: PropTypes.shape({
    $$typeof: PropTypes.symbol.isRequired,
    Consumer: PropTypes.object.isRequired,
    Provider: PropTypes.object.isRequired,
  }).isRequired,
};
export default MovieList;
