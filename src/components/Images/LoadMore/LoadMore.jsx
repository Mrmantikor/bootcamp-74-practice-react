import s from './LoadMore.module.css';

export const LoadMore = ({ handleClick }) => {
  return (
    <button onClick={handleClick} className={s.button}>
      Load More
    </button>
  );
};
