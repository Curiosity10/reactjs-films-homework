import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getPopularMovies } from '../../utils/tbdbApiService';

export const MovieContext = React.createContext();

export const MovieContextProvider = ({ children }) => {
  const [layout, setLayout] = useState('grid');
  const initialState = {
    movies: getPopularMovies(),
    layout,
    changeLayout: setLayout,
  };
  return (
    <MovieContext.Provider value={initialState}>
      {children}
    </MovieContext.Provider>
  );
};

MovieContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
