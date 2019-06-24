import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import MoviesContainer from '../../components/Movies';
import styles from './SearchResultsPage.scss';
import Footer from '../../components/Footer';

const SearchResultsPage = ({ fetchLatestMovies, fetchGenres }) => {
  useEffect(() => {
    fetchGenres();
    fetchLatestMovies();
  }, [fetchGenres, fetchLatestMovies]);
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.backdrop}>
        <Menu />
        <MoviesContainer />
      </div>
      <Footer />
    </div>
  );
};

SearchResultsPage.propTypes = {
  fetchLatestMovies: PropTypes.func,
  fetchGenres: PropTypes.func,
};

SearchResultsPage.defaultProps = {
  fetchLatestMovies: () => { },
  fetchGenres: () => { },
};

export default SearchResultsPage;
