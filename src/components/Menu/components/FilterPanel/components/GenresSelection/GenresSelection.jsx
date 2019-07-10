import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from '../../FilterPanel.scss';

const GenresSelection = ({
  setActive, checkActiveItem, fetchedGenres, fetchMoviesByGenre, filter,
}) => {
  const [selectValue, setSelectValue] = useState('');
  const genres = fetchedGenres;

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
          fetchMoviesByGenre(e.target.value);
        }, [setActive, fetchMoviesByGenre, setSelectValue])}
        aria-label="Genres"
        value={selectValue}
        className={cn(styles.selectGenre, checkActiveItem('Genres'))}
        name="selectGenre"
      >
        <option value="" disabled hidden>Genre</option>
        { genres.map(item => (
          <option value={item.id} key={item.id}>{item.name}</option>
        ))
        }
      </select>
    </li>
  );
};

GenresSelection.propTypes = {
  setActive: PropTypes.func,
  checkActiveItem: PropTypes.func,
  fetchedGenres: PropTypes.arrayOf(PropTypes.object),
  fetchMoviesByGenre: PropTypes.func,
  filter: PropTypes.string,
};

GenresSelection.defaultProps = {
  setActive: () => {},
  checkActiveItem: () => {},
  fetchedGenres: [],
  fetchMoviesByGenre: () => {},
  filter: 'Trending',
};

export default GenresSelection;
