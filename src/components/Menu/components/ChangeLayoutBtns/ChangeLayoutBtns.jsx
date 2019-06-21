import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './ChangeLayoutBtns.scss';

const ChangeLayoutBtns = ({ changeLayout }) => {
  const [active, setActive] = useState('grid');
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

ChangeLayoutBtns.propTypes = {
  changeLayout: PropTypes.func,
};

ChangeLayoutBtns.defaultProps = {
  changeLayout: () => {},
};

export default ChangeLayoutBtns;
