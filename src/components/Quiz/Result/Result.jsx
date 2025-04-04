import s from './Result.module.css';

const Result = ({ correct, total, startAgain }) => {
  return (
    <div className={s.card}>
      <img
        className={s.poster}
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
        alt="final"
      />
      <h2>
        Ви відповіти правильно на {correct} питання з {total}
      </h2>
      <button className={s.btn} onClick={startAgain}>
        Спробувати знову
      </button>
    </div>
  );
};

export default Result;
