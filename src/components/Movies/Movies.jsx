import React, { useContext } from 'react';
import cn from 'classnames/bind';
import styles from './Movies.scss';
import Grid from './components/Grid';
import Table from './components/Table';
import { MovieContext } from '../MovieContext';

const cx = cn.bind(styles);

const Movies = () => {
  const { movies, layout } = useContext(MovieContext);
  return (
    <main className={cx({ gridMovieList: layout === 'grid', tableMovieList: layout === 'table' })}>
      {
        layout === 'grid' ? <Grid movies={movies} /> : <Table movies={movies} />
      }
    </main>
  );
};

export default Movies;
