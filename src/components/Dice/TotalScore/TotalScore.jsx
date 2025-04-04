import styles from './TotalScore.module.css';

const TotalScore = ({ score }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{score}</h1>
      <p className={styles.descr}>Total Score </p>
    </div>
  );
};

export default TotalScore;
