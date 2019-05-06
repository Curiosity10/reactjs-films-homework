import React, { useContext } from 'react';
import cn from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './MovieList.scss';
import GridMovieList from './components/GridMovieList';
import TableMovieList from './components/TableMovieList';

const cx = cn.bind(styles);

const MovieList = ({ context }) => {
  const { movies, layout } = useContext(context);
  return (
    <main className={cx({ gridMovieList: layout === 'grid', tableMovieList: layout === 'table' })}>
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
