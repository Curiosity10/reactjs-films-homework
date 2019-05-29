import React from 'react';
import Hero from '../../components/Hero';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Movies from '../../components/Movies';
import styles from './MovieDetailsPage.scss';
import Spinner from '../../components/Spinner';
import Footer from '../../components/Footer';
import { MovieContextProvider } from '../../components/MovieContext';

const MovieDetailsPage = () => (
  <>
    <Header />
    <Hero />
    <div className={styles.backdrop}>
      <MovieContextProvider>
        <Menu />
        <Movies />
      </MovieContextProvider>
      <Spinner />
    </div>
    <Footer />
  </>
);

export default MovieDetailsPage;
