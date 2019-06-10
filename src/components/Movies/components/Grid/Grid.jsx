import React, { useState, useCallback } from 'react';
import GridCard from './components/GridCard';

const Grid = ({ movies }) => {
  const [activeCard, setActiveCard] = useState(0);
  const changeActiveCard = useCallback(
    (id) => {
      setActiveCard(id);
    },
    [],
  );

  return movies.map(movie => (
    <GridCard
      activeCard={activeCard}
      changeActiveCard={changeActiveCard}
      key={movie.id}
      movie={movie}
      isActive={movie.id !== activeCard}
    />
  ));
};

export default Grid;
