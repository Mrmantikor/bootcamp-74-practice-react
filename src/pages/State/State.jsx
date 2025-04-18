import Options from '../../components/State/Options/Options';
import DisplayResult from '../../components/State/DisplayResult/DisplayResult';
import Heading from '../../components/Heading/Heading';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import Section from '../../components/Section/Section.jsx';
import Container from '../../components/Container/Container.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { addPoint, resetPoints} from '../../redux/pointsSlice.js';
import { selectPoints } from '../../redux/selectors.js';

const State = () => {
  const points = useSelector(selectPoints)
  const dispatch = useDispatch()

  const handleClick = (key, value) => {
    dispatch(addPoint({key, value}))
  };
  const handleReset = () => {
    dispatch(resetPoints())
  };

  const totalPoints = Object.values(points).reduce(
    (acc, item) => acc + item,
    0
  );

  const pointsList = [...Object.entries(points), ['total result', totalPoints]];

  return (
    <Section>
      <Container>
        <Options
          options={Object.keys(points)}
          handleClick={handleClick}
          totalPoints={totalPoints}
          resetPoints={handleReset}
        />
        {totalPoints === 0 ? (
          <Heading text="You can give your points" variant="info" mTop />
        ) : (
          <DisplayResult points={pointsList} />
        )}
      </Container>
    </Section>
  );
};

export default State;
