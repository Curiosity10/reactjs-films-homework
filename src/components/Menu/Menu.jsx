import React from 'react';
import styles from './Menu.scss';
import FilterPanel from './components/FilterPanel';
import ChangeLayoutBtns from './components/ChangeLayoutBtns';

const Menu = () => (
  <section className={styles.menu}>
    <FilterPanel />
    <ChangeLayoutBtns />
  </section>
);

export default Menu;
