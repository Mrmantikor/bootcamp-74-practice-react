import s from "./forbesList.module.css";
import ForbesListItem from "../ForbesListItem/ForbesListItem";

const ForbesList = ({ forbeslist }) => {
  return (
    <div className={s.board}>
      <div className={s.header}>
        <h2 className={s.title}>
          <span className={s.titleTop}>Forbes</span>
          <span className={s.titleBottom}>Leader board</span>
        </h2>
      </div>

      <ul className={s.list}>
        {forbeslist.map(({ id, ...rest }) => {
          return (
            <li key={id} className={s.item}>
              <ForbesListItem {...rest} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ForbesList;
