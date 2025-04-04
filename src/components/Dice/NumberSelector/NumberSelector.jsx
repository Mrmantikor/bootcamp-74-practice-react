import clsx from 'clsx';
import styles from './NumberSelector.module.css';
const NumberSelector = ({
  error,
  selectedNumber,
  setSelectedNumber,
  setError,
}) => {
  const numbers = [1, 2, 3, 4, 5, 6];
  const handleClick = item => {
    setSelectedNumber(item);
    setError('');
  };
  return (
    <div className={styles.container}>
      {error && <p className={styles.error}>{error}</p>}
      <ul className={styles.list}>
        {numbers.map(item => {
          return (
            <li key={item}>
              <button
                onClick={() => handleClick(item)}
                className={clsx(
                  styles.btn,
                  selectedNumber === item && styles.selected
                )}
              >
                {item}
              </button>
            </li>
          );
        })}
      </ul>
      <p>Select Number</p>
    </div>
  );
};

export default NumberSelector;
