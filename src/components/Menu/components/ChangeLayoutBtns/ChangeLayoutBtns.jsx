import React, { useState, useContext } from 'react';
import cn from 'classnames';
import styles from './ChangeLayoutBtns.scss';
import Icon from '../../../Icon';
import { MovieContext } from '../../../MovieContext';

const ChangeLayoutBtns = () => {
  const [active, setActive] = useState(null);
  const { changeLayout } = useContext(MovieContext);
  const checkActiveItem = itemName => (itemName === active ? styles.btn__active : null);
  return (
    <div>
      <button
        aria-label="Grid"
        onClick={() => { setActive('grid'); changeLayout('grid'); }}
        className={cn(styles.btn, checkActiveItem('grid'))}
        type="button"
      >
        <Icon name="grid" color="#b7b7b7" />
      </button>
      <button
        aria-label="Table"
        onClick={() => { setActive('table'); changeLayout('table'); }}
        className={cn(styles.btn, checkActiveItem('table'))}
        type="button"
      >
        <Icon name="table" color="#b7b7b7" />
      </button>
    </div>
  );
};


export default ChangeLayoutBtns;
