import React from 'react';
import TableMovieCard from './components/TableMovieCard';

const TableMovieList = ({ movies }) => (movies.map(movie => (
  <TableMovieCard
    key={movie.id}
    movie={movie}
  />
))
);

export default TableMovieList;
