import Container from '../../Container/Container';
import Button from '../Button/Button';

const StartGame = ({ toggle }) => {
  return (
    <>
      <img src="../../images/dices.png" />
      <div>
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </>
  );
};

export default StartGame;
