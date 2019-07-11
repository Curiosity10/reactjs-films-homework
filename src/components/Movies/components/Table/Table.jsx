import React from 'react';
import TableCardContainer from './components/TableCard';

const Table = ({ movies, toggleModal }) => (movies.map(movie => (
  <TableCardContainer
    key={movie.id}
    movie={movie}
    toggleModal={toggleModal}
  />
))
);

export default Table;
