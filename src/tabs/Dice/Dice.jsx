import { useState } from 'react';
import Gameplay from '../../components/Dice/Gameplay/Gameplay';
import StartGame from '../../components/Dice/StartGame/StartGame';
import styles from './Dice.module.css';

const Dice = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted(!isGameStarted);
  };
  return (
    <div className={styles.container}>
      {isGameStarted ? <Gameplay /> : <StartGame toggle={toggleGamePlay} />}
    </div>
  );
};

export default Dice;
