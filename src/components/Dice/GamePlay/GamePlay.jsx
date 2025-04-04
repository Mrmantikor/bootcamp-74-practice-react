import { useState } from 'react';
import NumberSelector from '../NumberSelector/NumberSelector';
import TotalScore from '../TotalScore/TotalScore';
import styles from './GamePlay.module.css';
import RollDice from '../RollDice/RollDice';
import { generateRandomNumber } from '../../../helpers/generateRandomNumber';
import Rules from '../Rules/Rules';
import Button from '../Button/Button';

const Gameplay = () => {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [error, setError] = useState('');
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [showRule, setShowRule] = useState(false);

  const rollDice = () => {
    if (!selectedNumber) {
      setError(`You haven't selected any number`);
      return;
    }
    const randomNumber = generateRandomNumber();
    setCurrentDice(randomNumber);
    if (selectedNumber === randomNumber) {
      setScore(score + randomNumber);
    } else {
      setScore(score - 2);
    }
  };
  const resetScore = () => {
    setScore(0);
  };
  const toggleRules = () => {
    setShowRule(!showRule);
  };
  return (
    <section className={styles.section}>
      <div className={styles.top_section}>
        <TotalScore score={score} />
        <NumberSelector
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          error={error}
        />
      </div>
      <RollDice currentDice={currentDice} rollDice={rollDice} />
      <div className={styles.btns}>
        <Button onClick={resetScore} outline>
          Reset Score
        </Button>
        <Button onClick={toggleRules}>
          {showRule ? 'Hide' : 'Show'} Rules
        </Button>
      </div>
      {showRule && <Rules />}
    </section>
  );
};

export default Gameplay;
