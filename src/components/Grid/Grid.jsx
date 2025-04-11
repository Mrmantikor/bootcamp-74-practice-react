import s from './Grid.module.css';

function Grid({ children, ref }) {
  return (
    <ul ref={ref} className={s.list}>
      {children}
    </ul>
  );
}

export default Grid;
