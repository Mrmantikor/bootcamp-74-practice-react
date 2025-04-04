import s from './Rules.module.css';

const Rules = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>How to play dice game</h2>
      <div className={s.text}>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          after click on dice if selected number is equal to dice number you
          will get same point as dice{' '}
        </p>
        <p>if you get wrong guess then 2 point will be dedcuted </p>
      </div>
    </div>
  );
};

export default Rules;
