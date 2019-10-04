import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.scss';
import SearchFormContainer from './components/SearchForm';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <h1><Link to="/" className={styles.logo} href="/">Films</Link></h1>
      <SearchFormContainer />
    </div>
  </header>
);

export default Header;
