import { useState } from 'react';
import Options from '../../components/State/Options/Options';
import DisplayResult from '../../components/State/DisplayResult/DisplayResult';
import Heading from '../../components/Heading/Heading';

const State = () => {
  const [points, setPoints] = useState({
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
  });

  const handleClick = (key, value) => {
    setPoints({ ...points, [key]: points[key] + value });
  };
  const resetPoints = () => {
    setPoints({ one: 0, two: 0, three: 0, four: 0, five: 0 });
  };

  const totalPoints = Object.values(points).reduce(
    (acc, item) => acc + item,
    0
  );

  const pointsList = [...Object.entries(points), ['total result', totalPoints]];

  return (
    <>
      <Options
        options={Object.keys(points)}
        handleClick={handleClick}
        totalPoints={totalPoints}
        resetPoints={resetPoints}
      />
      {totalPoints === 0 ? (
        <Heading text="You can give your points" variant="info" mTop />
      ) : (
        <DisplayResult points={pointsList} />
      )}
    </>
  );
};

export default State;
