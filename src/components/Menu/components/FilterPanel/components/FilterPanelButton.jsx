import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from '../FilterPanel.scss';

const FilterPanelButton = ({ name, setActiveItem, setActive }) => (
  <li className={styles.navItem}>
    <button
      aria-label={name}
      type="button"
      className={cn(styles.btn, setActiveItem(name))}
      onClick={useCallback(() => setActive(name), [name, setActive])}
    >
      {name}
    </button>
  </li>
);

FilterPanelButton.propTypes = {
  name: PropTypes.string.isRequired,
  setActive: PropTypes.func.isRequired,
  setActiveItem: PropTypes.func.isRequired,
};

export default FilterPanelButton;
