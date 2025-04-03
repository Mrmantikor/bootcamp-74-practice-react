import { getRandomColor } from '../../../helpers/getRandomColor';
import Heading from '../../Heading/Heading';
import s from './DisplayResult.module.css';

const DisplayResult = ({ points }) => {
  return (
    <div>
      <Heading text="Points" mTop bottom variant="success" />
      <ul className={s.list}>
        {points.map(([key, value]) => (
          <li key={key} className={s.listItem} style={{ backgroundColor: getRandomColor() }}>
            <span>
              {key}: {value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayResult;
