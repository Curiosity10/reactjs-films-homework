import React from 'react';
import styles from './Menu.scss';
import FilterPanelContainer from './components/FilterPanel';
import ChangeLayoutBtnsContainer from './components/ChangeLayoutBtns';

const Menu = () => (
  <section className={styles.menu}>
    <FilterPanelContainer />
    <ChangeLayoutBtnsContainer />
  </section>
);

export default Menu;
