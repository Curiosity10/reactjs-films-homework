import React from 'react';
import styles from './Header.scss';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <h1 className={styles.logo}>Films</h1>
      <form className={styles.searchForm}>
        <input placeholder="Search..." className={styles.input} type="search" />
        <button aria-label="Search" type="submit" className={styles.searchBtn} />
      </form>
    </div>
  </header>
);

export default Header;
