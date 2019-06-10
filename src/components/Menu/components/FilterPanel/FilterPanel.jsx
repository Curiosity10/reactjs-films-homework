import React, { useState, useCallback } from 'react';
import cn from 'classnames';
import styles from './FilterPanel.scss';
import { getGenres } from '../../../../utils/tbdbApiService';
import FilterPanelButton from './components';

const FilterPanel = () => {
  const [genres] = useState(getGenres());
  const genreList = genres.map(item => (
    <option value={item.name} key={item.id}>{item.name}</option>
  ));
  const [active, setActive] = useState('Trending');
  const setActiveItem = itemName => (itemName === active ? styles.btn__active : null);
  return (
    <nav>
      <ul>
        <FilterPanelButton setActiveItem={setActiveItem} name="Trending" setActive={setActive} />
        <FilterPanelButton setActiveItem={setActiveItem} name="Top Rated" setActive={setActive} />
        <FilterPanelButton setActiveItem={setActiveItem} name="Coming Soon" setActive={setActive} />
        <li className={styles.navItem}>
          <select
            defaultValue=""
            aria-label="Genres"
            className={cn(styles.selectGenre, setActiveItem('Genres'))}
            onClick={useCallback(() => setActive('Genres'), [])}
            name="selectGenre"
          >
            <option value="" disabled hidden>Genre</option>
            { genreList }
          </select>
        </li>
      </ul>
    </nav>
  );
};

export default FilterPanel;
