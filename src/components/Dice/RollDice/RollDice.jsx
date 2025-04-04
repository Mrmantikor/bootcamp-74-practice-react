import styles from './RollDice.module.css';

const RollDice = ({ currentDice, rollDice }) => {
  return (
    <div onClick={rollDice} className={styles.container}>
      <div className={styles.dice}>
        <img src={`../../images/dice/dice_${currentDice}.png`} />
      </div>
      <p className={styles.text}> Click on dice to roll</p>
    </div>
  );
};

export default RollDice;
