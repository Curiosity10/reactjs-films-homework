import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from '../../FilterPanel.scss';

const FilterPanelButton = ({
  name, setActiveItem, setActive, fetchMovies, activeItem,
}) => (
  <li className={styles.navItem}>
    <button
      disabled={activeItem === name}
      aria-label={name}
      type="button"
      className={cn(styles.btn, setActiveItem(name))}
      onClick={useCallback(() => {
        setActive(name);
        fetchMovies(1);
      }, [fetchMovies, name, setActive])}
    >
      {name}
    </button>
  </li>
);

FilterPanelButton.propTypes = {
  name: PropTypes.string.isRequired,
  activeItem: PropTypes.string,
  setActive: PropTypes.func.isRequired,
  setActiveItem: PropTypes.func.isRequired,
  fetchMovies: PropTypes.func,
};

FilterPanelButton.defaultProps = {
  fetchMovies: () => {},
  activeItem: 'Trending',
};

export default FilterPanelButton;
