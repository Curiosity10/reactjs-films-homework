import React from 'react';
import Hero from '../../components/Hero';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import MovieList from '../../components/MovieList';
import styles from './MovieDetailsPage.scss';
import Spinner from '../../components/Spinner';
import Footer from '../../components/Footer';
import { MovieContextProvider, MovieContext } from '../../components/MovieContext';

const MovieDetailsPage = () => (
  <>
    <Header />
    <Hero />
    <div className={styles.backdrop}>
      <MovieContextProvider>
        <Menu />
        <MovieList context={MovieContext} />
      </MovieContextProvider>
      <Spinner />
    </div>
    <Footer />
  </>
);

export default MovieDetailsPage;
