import React, { useState, useContext, useCallback } from 'react';
import cn from 'classnames';
import styles from './ChangeLayoutBtns.scss';
import { MovieContext } from '../../../MovieContext';

const ChangeLayoutBtns = () => {
  const [active, setActive] = useState('grid');
  const { changeLayout } = useContext(MovieContext);
  return (
    <div>
      <button
        aria-label="Grid"
        onClick={useCallback(() => {
          setActive('grid');
          changeLayout('grid');
        }, [changeLayout])}
        className={cn(styles.btn, { [`${styles.btn__active}`]: active === 'grid' })}
        type="button"
      />
      <button
        aria-label="Table"
        onClick={useCallback(() => {
          setActive('table');
          changeLayout('table');
        }, [changeLayout])}
        className={cn(styles.btn, { [`${styles.btn__active}`]: active === 'table' })}
        type="button"
      />
    </div>
  );
};


export default ChangeLayoutBtns;
