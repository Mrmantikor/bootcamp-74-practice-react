import s from './Game.module.css';

const Game = ({ percentage, title, variants, handleClick }) => {
  return (
    <>
      <div className={s.card}>
        <div style={{ width: `${percentage}%` }}></div>
      </div>
      <h1 className={s.title}>{title}</h1>
      <ul>
        {variants.map((item, index) => (
          <li key={item} className={s.item} onClick={() => handleClick(index)}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Game;
