import clsx from 'clsx';
import styles from './Button.module.css';

const Button = ({ children, onClick, outline }) => {
  return (
    <button
      className={clsx(styles.btn, outline && styles.outlineButton)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
