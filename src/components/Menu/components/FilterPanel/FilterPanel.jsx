import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilterPanel.scss';
import FilterPanelButton from './components/FilterPanelButton';
import GenresSelectionContainer from './components/GenresSelection';

const FilterPanel = ({
  fetchMoviesByFilter, changeFilter, filter,
}) => {
  const checkActiveItem = url => (url === filter && styles.btn__active);

  return (
    <nav>
      <ul>
        <FilterPanelButton
          activeItem={filter}
          checkActiveItem={checkActiveItem}
          name="Trending"
          setActive={changeFilter}
          url="popular"
          fetchMovies={fetchMoviesByFilter}
        />
        <FilterPanelButton
          activeItem={filter}
          checkActiveItem={checkActiveItem}
          name="Top Rated"
          url="top_rated"
          setActive={changeFilter}
          fetchMovies={fetchMoviesByFilter}
        />
        <FilterPanelButton
          activeItem={filter}
          checkActiveItem={checkActiveItem}
          name="Coming Soon"
          url="upcoming"
          setActive={changeFilter}
          fetchMovies={fetchMoviesByFilter}
        />
        <GenresSelectionContainer checkActiveItem={checkActiveItem} setActive={changeFilter} />
      </ul>
    </nav>
  );
};

FilterPanel.propTypes = {
  fetchMoviesByFilter: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string,
};

FilterPanel.defaultProps = {
  filter: 'popular',
};

export default FilterPanel;
