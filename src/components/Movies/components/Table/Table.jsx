import React from 'react';
import TableCard from './components/TableCard';

const Table = ({ movies }) => (movies.map(movie => (
  <TableCard
    key={movie.id}
    movie={movie}
  />
))
);

export default Table;
