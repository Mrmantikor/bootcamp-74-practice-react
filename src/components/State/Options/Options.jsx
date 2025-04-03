import { getRandomColor } from '../../../helpers/getRandomColor';
import s from './Options.module.css';

const Options = ({ options, handleClick, totalPoints, resetPoints }) => {
  return (
    <ul className={s.list}>
      {options.map((option, idx) => {
        return (
          <li key={option}>
            <button
              onClick={() => handleClick(option, idx + 1)}
              className={s.btn}
              style={{ backgroundColor: getRandomColor() }}
            >
              {option}
            </button>
          </li>
        );
      })}
      {totalPoints !== 0 && (
        <li key="reset">
          <button className={s.btn} style={{ backgroundColor: '#ff0000' }} onClick={resetPoints}>
            Reset points
          </button>
        </li>
      )}
    </ul>
  );
};

export default Options;
