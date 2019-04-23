import React from 'react';
import styles from './Spinner.scss';

const Spinner = () => (
  <div className={styles.spinner}>
    <div className={styles.spinner_ellipsis}>
      <div />
      <div />
      <div />
      <div />
    </div>
    <h3 className={styles.spinner_title}>Loading</h3>
  </div>
);

export default Spinner;
