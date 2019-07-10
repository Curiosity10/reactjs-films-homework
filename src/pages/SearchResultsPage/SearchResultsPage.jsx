import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import MoviesContainer from '../../components/Movies';
import styles from './SearchResultsPage.scss';
import Footer from '../../components/Footer';

const SearchResultsPage = ({ fetchData }) => {
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.backdrop} id="top">
        <Menu />
        <MoviesContainer />
      </div>
      <Footer />
    </div>
  );
};

SearchResultsPage.propTypes = {
  fetchData: PropTypes.func,
};

SearchResultsPage.defaultProps = {
  fetchData: () => { },
};

export default SearchResultsPage;
