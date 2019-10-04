import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../../Header.scss';

const SearchForm = withRouter(({ fetchSearchMovies, changeFilter, history }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    changeFilter('Search');
    history.push({
      pathname: '/Search',
      search: `?query=${searchQuery}`,
    });
    /* istanbul ignore next */
    window.scrollTo(0, 0);

    if (searchQuery.trim()) {
      fetchSearchMovies(searchQuery);
    }
  };
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <input
        aria-label="Search Input"
        placeholder="Search..."
        className={styles.input}
        type="search"
        value={searchQuery}
        onChange={handleChange}
      />
      <button aria-label="Search Button" type="submit" className={styles.searchBtn} />
    </form>
  );
});

SearchForm.propTypes = {
  fetchSearchMovies: PropTypes.func,
  changeFilter: PropTypes.func,
};

SearchForm.defaultProps = {
  fetchSearchMovies: () => {},
  changeFilter: () => {},
};

export default SearchForm;
