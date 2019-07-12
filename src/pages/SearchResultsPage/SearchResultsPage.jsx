import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import MoviesContainer from '../../components/Movies';
import styles from './SearchResultsPage.scss';
import Footer from '../../components/Footer';

const SearchResultsPage = ({ fetchData, changeFilter, changeLayout }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    changeLayout();
    changeFilter();
  }, [changeFilter, changeLayout]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.backdrop}>
        <Menu />
        <MoviesContainer isModalOpen={isModalOpen} toggleModal={setModalOpen} />
      </div>
      <Footer />
    </div>
  );
};

SearchResultsPage.propTypes = {
  fetchData: PropTypes.func,
  changeFilter: PropTypes.func,
  changeLayout: PropTypes.func,
};

SearchResultsPage.defaultProps = {
  fetchData: () => { },
  changeFilter: () => { },
  changeLayout: () => { },
};

export default SearchResultsPage;
