import React, { useState } from 'react';
import cn from 'classnames';
import styles from './FilterPanel.scss';
import { getGenres } from '../../../../utils/tbdbApiService';

const FilterPanel = () => {
  const [genres] = useState(getGenres());
  const genreList = genres.map(item => (
    <option value={item.name} key={item.id}>{item.name}</option>
  ));
  const [active, setActive] = useState(null);
  const checkActiveItem = itemName => (itemName === active ? styles.navItem_btn__active : null);
  return (
    <nav>
      <ul>
        <li className={styles.navItem}>
          <button
            aria-label="Trending"
            type="button"
            className={cn(styles.navItem_btn, checkActiveItem('Trending'))}
            onClick={() => setActive('Trending')}
          >
            Trending
          </button>
        </li>
        <li className={styles.navItem}>
          <button
            aria-label="Top Rated"
            type="button"
            className={cn(styles.navItem_btn, checkActiveItem('Top Rated'))}
            onClick={() => setActive('Top Rated')}
          >
            Top Rated
          </button>
        </li>
        <li className={styles.navItem}>
          <button
            aria-label="Coming Soon"
            type="button"
            className={cn(styles.navItem_btn, checkActiveItem('Coming Soon'))}
            onClick={() => setActive('Coming Soon')}
          >
            Coming Soon
          </button>
        </li>
        <li className={styles.navItem}>
          <select
            aria-label="Genres"
            className={cn(styles.navItem_selectGenre, checkActiveItem('Genres'))}
            onClick={() => setActive('Genres')}
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
