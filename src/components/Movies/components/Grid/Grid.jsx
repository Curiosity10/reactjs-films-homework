import React, { useState, useCallback } from 'react';
import GridCardContainer from './components/GridCard';

const Grid = ({ movies, toggleModal }) => {
  const [activeCard, setActiveCard] = useState(0);
  const changeActiveCard = useCallback(
    (id) => {
      setActiveCard(id);
    },
    [],
  );
  return movies.map(movie => (
    <GridCardContainer
      activeCard={activeCard}
      changeActiveCard={changeActiveCard}
      key={movie.id}
      movie={movie}
      toggleModal={toggleModal}
      isActive={movie.id !== activeCard}
    />
  ));
};

export default Grid;
