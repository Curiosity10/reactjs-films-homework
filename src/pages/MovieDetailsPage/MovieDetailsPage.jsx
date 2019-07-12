import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import HeroContainer from '../../components/Hero';
import Menu from '../../components/Menu';
import MoviesContainer from '../../components/Movies';
import styles from './MovieDetailsPage.scss';
import Footer from '../../components/Footer';

const MovieDetailsPage = ({
  fetchMovieDetails,
  fetchMoviesByFilter,
  fetchGenres,
  changeFilter,
  changeLayout,
  id,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    changeLayout();
    changeFilter();
    fetchMoviesByFilter();
    fetchGenres();
  }, [fetchMoviesByFilter, fetchGenres, changeFilter, changeLayout]);

  useEffect(() => {
    fetchMovieDetails(id);
  }, [id, fetchMovieDetails]);

  return (

    <div className={styles.container}>
      <Header />
      <div className={styles.backdrop}>
        <HeroContainer toggleModal={setModalOpen} />
        <Menu />
        <MoviesContainer isModalOpen={isModalOpen} toggleModal={setModalOpen} />
      </div>
      <Footer />
    </div>
  );
};

MovieDetailsPage.propTypes = {
  fetchMovieDetails: PropTypes.func.isRequired,
  fetchMoviesByFilter: PropTypes.func.isRequired,
  fetchGenres: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  changeLayout: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default MovieDetailsPage;
