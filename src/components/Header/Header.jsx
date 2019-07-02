import React from 'react';
import styles from './Header.scss';
import SearchFormContainer from './components/SearchForm';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <h1><a className={styles.logo} href="/">Films</a></h1>
      <SearchFormContainer />
    </div>
  </header>
);

export default Header;
