import React from 'react';
import s from './RegularButton.module.css';
import clsx from 'clsx';
const RegularButton = ({ type = 'button', children, handleClick, style }) => {
  return (
    <button
      className={clsx(s.btn, { [s[style]]: style })}
      onClick={type === 'button' ? handleClick : null}
      type={type}
    >
      {children}
    </button>
  );
};

export default RegularButton;
