import React, {
  useCallback, useEffect, useState,
} from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from '../../FilterPanel.scss';

const GenresSelection = withRouter(({
  setActive,
  checkActiveItem,
  fetchedGenres,
  fetchMoviesByGenre,
  filter,
  history,
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
          history.push({
            pathname: '/Genres',
            search: `?id=${e.target.value}`,
          });
          setActive('Genres');
          fetchMoviesByGenre(e.target.value);
        }, [setActive, fetchMoviesByGenre, setSelectValue, history])}
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
});

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
