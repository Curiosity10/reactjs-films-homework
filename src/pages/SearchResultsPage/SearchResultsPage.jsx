import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import MoviesContainer from '../../components/Movies';
import styles from './SearchResultsPage.scss';
import Footer from '../../components/Footer';

const SearchResultsPage = ({
  fetchGenres,
  fetchMoviesByFilter,
  changeFilter,
  fetchSearchMovies,
  fetchMoviesByGenre,
  location,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const filter = location.pathname.slice(1) || 'popular';

  const queryRegExp = new RegExp(/[^=]*$/g);
  const query = location.search.match(queryRegExp)[0];

  useEffect(() => {
    fetchGenres();
    changeFilter(filter);
    switch (filter) {
      case 'popular':
      case 'top_rated':
      case 'upcoming':
        fetchMoviesByFilter();
        break;
      case 'Genres':
        fetchMoviesByGenre(query);
        break;
      case 'Search':
        fetchSearchMovies(query);
        break;
      default:
        break;
    }
  }, [
    changeFilter, fetchGenres, fetchMoviesByFilter,
    fetchMoviesByGenre, fetchSearchMovies, filter, query,
  ]);

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
  changeFilter: PropTypes.func.isRequired,
  fetchGenres: PropTypes.func.isRequired,
  fetchMoviesByFilter: PropTypes.func.isRequired,
  fetchSearchMovies: PropTypes.func.isRequired,
  fetchMoviesByGenre: PropTypes.func.isRequired,
  location: PropTypes.objectOf(PropTypes.string),
};

SearchResultsPage.defaultProps = {
  location: { },
};

export default SearchResultsPage;
