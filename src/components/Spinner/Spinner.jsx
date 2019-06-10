import React from 'react';
import styles from './Spinner.scss';

const Spinner = () => (
  <div className={styles.spinner}>
    <div className={styles.ellipsis}>
      <div />
      <div />
      <div />
      <div />
    </div>
    <p className={styles.title}>Loading</p>
  </div>
);

export default Spinner;
