import React, { useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from '../../FilterPanel.scss';

const FilterPanelButton = withRouter(({
  name, checkActiveItem, setActive, fetchMovies, activeItem, url, history,
}) => (
  <li className={styles.navItem}>
    <button
      disabled={activeItem === name}
      aria-label={name}
      type="button"
      className={cn(styles.btn, checkActiveItem(url))}
      onClick={useCallback(() => {
        history.push(`/${url}`);
        setActive(url);
        fetchMovies();
      }, [fetchMovies, setActive, url, history])}
    >
      {name}
    </button>
  </li>
));

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
  activeItem: 'popular',
};

export default FilterPanelButton;
