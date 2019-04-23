import React, { useState } from 'react';
import GridMovieCard from './components/GridMovieCard';

const GridMovieList = ({ movies }) => {
  const [activeCard, setActiveCard] = useState(0);
  return movies.map(movie => (
    <GridMovieCard
      activeCard={activeCard}
      changeActiveCard={id => setActiveCard(id)}
      key={movie.id}
      movie={movie}
    />
  ));
};

export default GridMovieList;
