import s from "./Game.module.css";

const Game = ({ question: { percentage, title, variants } }) => {
  return (
    <>
      <div className={s.card}>
        <div style={{ width: `${percentage}%` }}></div>
      </div>
      <h1 className={s.title}>{title}</h1>
      <ul>
        {variants.map((item) => (
          <li key={item} className={s.item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Game;
