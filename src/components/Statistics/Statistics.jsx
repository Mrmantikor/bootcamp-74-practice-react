import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import StatisticsItem from "../StatisticsItem/StatisticsItem";
import s from './Statistics.module.css';

const icons = [<FaRegThumbsUp/>, <MdPeople/>, <MdOutlineProductionQuantityLimits/>, <GiTreeDoor/>];
const Statistics = ({ stats, text }) => {
  return (
    <>
    {text&&<h2 className={s.title}>{text}</h2>}
    <ul className={s.list}>
      {stats.map(({ id, ...rest }, index) => {
        return (
          <li className={s.item} key={id}>
            <StatisticsItem icon={icons[index]} {...rest} />
          </li>
        );
      })}
    </ul>
    </>
  );
};

export default Statistics;
