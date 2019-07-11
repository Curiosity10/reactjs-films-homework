import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from '../../FilterPanel.scss';

const FilterPanelButton = ({
  name, checkActiveItem, setActive, fetchMovies, activeItem, url,
}) => (
  <li className={styles.navItem}>
    <button
      disabled={activeItem === name}
      aria-label={name}
      type="button"
      className={cn(styles.btn, checkActiveItem(url))}
      onClick={useCallback(() => {
        setActive(url);
        fetchMovies();
      }, [fetchMovies, setActive, url])}
    >
      {name}
    </button>
  </li>
);

FilterPanelButton.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  activeItem: PropTypes.string,
  setActive: PropTypes.func.isRequired,
  checkActiveItem: PropTypes.func.isRequired,
  fetchMovies: PropTypes.func,
};

FilterPanelButton.defaultProps = {
  fetchMovies: () => {},
  activeItem: 'Trending',
};

export default FilterPanelButton;
