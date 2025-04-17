import { useState } from 'react';
import Game from '../../components/Quiz/Game/Game';
import Result from '../../components/Quiz/Result/Result';
import { questions } from './questions';
import s from './Quiz.module.css';

const Quiz = () => {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const handleClick = index => {
    if (index === questions[step].correct) {
      setCorrect(correct + 1);
    }
    setStep(step + 1);
  };
  const startAgain = () => {
    setStep(0);
    setCorrect(0);
  };
  const percentage = Math.round((step / questions.length) * 100);
  return (
    <div className={s.container}>
      <div className={s.box}>
        {step !== questions.length ? (
          <Game
            percentage={percentage}
            {...questions[step]}
            handleClick={handleClick}
          />
        ) : (
          <Result
            correct={correct}
            total={questions.length}
            startAgain={startAgain}
          />
        )}
      </div>
    </div>
  );
};

export default Quiz;
