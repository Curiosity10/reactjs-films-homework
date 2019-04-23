import React from 'react';
import styles from './Header.scss';
import Icon from '../Icon';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.header_container}>
      <h1 className={styles.header_logo}>Films</h1>
      <form className={styles.header_searchForm}>
        <input placeholder="Search..." className={styles.header_input} type="search" />
        <button aria-label="Search" type="button" className={styles.header_searchBtn}>
          <Icon name="search" color="white" />
        </button>
      </form>
    </div>
  </header>
);

export default Header;
