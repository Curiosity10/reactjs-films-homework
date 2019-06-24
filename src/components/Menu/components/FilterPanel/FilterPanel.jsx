import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilterPanel.scss';
import FilterPanelButton from './components/FilterPanelButton';
import SelectContainer from './components/Select';

const FilterPanel = ({
  fetchTopRatedMovies, fetchLatestMovies, fetchUpcomingMovies,
  changeFilter, filter,
}) => {
  const setActiveItem = itemName => (itemName === filter && styles.btn__active);
  return (
    <nav>
      <ul>
        <FilterPanelButton activeItem={filter} setActiveItem={setActiveItem} name="Trending" setActive={changeFilter} fetchMovies={fetchLatestMovies} />
        <FilterPanelButton activeItem={filter} setActiveItem={setActiveItem} name="Top Rated" setActive={changeFilter} fetchMovies={fetchTopRatedMovies} />
        <FilterPanelButton activeItem={filter} setActiveItem={setActiveItem} name="Coming Soon" setActive={changeFilter} fetchMovies={fetchUpcomingMovies} />
        <SelectContainer setActiveItem={setActiveItem} setActive={changeFilter} />
      </ul>
    </nav>
  );
};

FilterPanel.propTypes = {
  fetchTopRatedMovies: PropTypes.func,
  fetchLatestMovies: PropTypes.func,
  fetchUpcomingMovies: PropTypes.func,
  changeFilter: PropTypes.func,
  filter: PropTypes.string,
};

FilterPanel.defaultProps = {
  fetchTopRatedMovies: () => {},
  fetchLatestMovies: () => {},
  fetchUpcomingMovies: () => {},
  changeFilter: () => {},
  filter: 'Trending',
};

export default FilterPanel;
