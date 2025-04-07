import s from './Grid.module.css';

function Grid({ children }) {
  return <ul className={s.list}>{children}</ul>;
}

export default Grid;
