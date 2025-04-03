import { BiDollarCircle } from "react-icons/bi";
import { FcBullish, FcBearish } from "react-icons/fc";
import s from "./ForbesListItem.module.css";

const ForbesListItem = ({ name, capital, avatar, isIncrease }) => {
  return (
    <>
      <img className={s.avatar} src={avatar} alt={name} />
      <h3 className={s.title}>{name}</h3>
      <span className={s.capital}>
        {capital} <BiDollarCircle color="#2196f3" size={22} />
        {isIncrease ? <FcBullish /> : <FcBearish />}
      </span>
    </>
  );
};

export default ForbesListItem;
