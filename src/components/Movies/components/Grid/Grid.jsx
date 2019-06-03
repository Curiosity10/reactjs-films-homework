import React, { useState } from 'react';
import GridCard from './components/GridCard';

const Grid = ({ movies }) => {
  const [activeCard, setActiveCard] = useState(0);
  return movies.map(movie => (
    <GridCard
      activeCard={activeCard}
      changeActiveCard={id => setActiveCard(id)}
      key={movie.id}
      movie={movie}
      isActive={movie.id !== activeCard}
    />
  ));
};

export default Grid;
