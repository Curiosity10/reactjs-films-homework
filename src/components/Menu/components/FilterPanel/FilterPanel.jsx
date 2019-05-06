import React, { useState, useCallback } from 'react';
import cn from 'classnames';
import styles from './FilterPanel.scss';
import { getGenres } from '../../../../utils/tbdbApiService';

const FilterPanel = () => {
  const [genres] = useState(getGenres());
  const genreList = genres.map(item => (
    <option value={item.name} key={item.id}>{item.name}</option>
  ));
  const [active, setActive] = useState(null);
  const checkActiveItem = itemName => (itemName === active ? styles.btn__active : null);
  return (
    <nav>
      <ul>
        <li className={styles.navItem}>
          <button
            aria-label="Trending"
            type="button"
            className={cn(styles.btn, checkActiveItem('Trending'))}
            onClick={useCallback(() => setActive('Trending'), [])}
          >
            Trending
          </button>
        </li>
        <li className={styles.navItem}>
          <button
            aria-label="Top Rated"
            type="button"
            className={cn(styles.btn, checkActiveItem('Top Rated'))}
            onClick={useCallback(() => setActive('Top Rated'), [])}
          >
            Top Rated
          </button>
        </li>
        <li className={styles.navItem}>
          <button
            aria-label="Coming Soon"
            type="button"
            className={cn(styles.btn, checkActiveItem('Coming Soon'))}
            onClick={useCallback(() => setActive('Coming Soon'), [])}
          >
            Coming Soon
          </button>
        </li>
        <li className={styles.navItem}>
          <select
            aria-label="Genres"
            className={cn(styles.selectGenre, checkActiveItem('Genres'))}
            onClick={useCallback(() => setActive('Genres'), [])}
            name="selectGenre"
          >
            <option selected disabled hidden>Genre</option>
            { genreList }
          </select>
        </li>
      </ul>
    </nav>
  );
};

export default FilterPanel;
