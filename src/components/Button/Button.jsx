import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Button.scss';

const Button = (props) => {
  const { children, type, handleClick } = props;

  return (
    <button
      aria-label={children}
      type="button"
      onClick={handleClick}
      className={cn(styles.btn, styles[type])}
    >
      { children }
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  children: PropTypes.string.isRequired,
};

Button.defaultProps = {
  handleClick: () => {},
};

export default Button;
