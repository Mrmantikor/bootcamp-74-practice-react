import s from './GridItem.module.css';

function GridItem({ children }) {
  return <li className={s.item}> {children}</li>;
}

export default GridItem;
