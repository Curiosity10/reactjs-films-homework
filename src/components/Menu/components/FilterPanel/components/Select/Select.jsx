import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from '../../FilterPanel.scss';

const Select = ({
  setActive, setActiveItem, fetchedGenres, fetchMoviesByGenre, filter,
}) => {
  const [selectValue, setSelectValue] = useState('');
  const genres = fetchedGenres;
  const genreList = genres.map(item => (
    <option value={item.id} key={item.id}>{item.name}</option>
  ));
  useEffect(() => {
    if (filter !== 'Genres') {
      setSelectValue('');
    }
  }, [filter, setSelectValue]);
  return (
    <li className={styles.navItem}>
      <select
        onChange={useCallback((e) => {
          setSelectValue(e.target.value);
          setActive('Genres');
          fetchMoviesByGenre(1, e.target.value);
        }, [setActive, fetchMoviesByGenre, setSelectValue])}
        aria-label="Genres"
        value={selectValue}
        className={cn(styles.selectGenre, setActiveItem('Genres'))}
        name="selectGenre"
      >
        <option value="" disabled hidden>Genre</option>
        { genreList }
      </select>
    </li>
  );
};

Select.propTypes = {
  setActive: PropTypes.func,
  setActiveItem: PropTypes.func,
  fetchedGenres: PropTypes.arrayOf(PropTypes.object),
  fetchMoviesByGenre: PropTypes.func,
  filter: PropTypes.string,
};

Select.defaultProps = {
  setActive: () => {},
  setActiveItem: () => {},
  fetchedGenres: [],
  fetchMoviesByGenre: () => {},
  filter: 'Trending',
};

export default Select;
