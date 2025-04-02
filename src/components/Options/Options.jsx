import { getRandomColor } from "../../helpers/getRandomColor";
import s from "./Options.module.css";

const Options = ({ options }) => {
  return (
    <ul className={s.list}>
      {options.map((option) => {
        console.log(option);
        return (
          <li key={option}>
            <button
              className={s.btn}
              style={{ backgroundColor: getRandomColor() }}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Options;
