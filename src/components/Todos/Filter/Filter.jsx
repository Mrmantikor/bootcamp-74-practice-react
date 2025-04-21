import { useDispatch, useSelector } from 'react-redux';
import { selectFilterTodo } from '../../../redux/filter/selectors';
import { setFilter } from '../../../redux/filter/filterSlice';
import s from './Filter.module.css';

const Filter = () => {
  const value = useSelector(selectFilterTodo);
  const dispatch = useDispatch();
  return (
    <input
      className={s.input}
      value={value}
      onChange={e => dispatch(setFilter(e.target.value))}
      placeholder="find todo"
    />
  );
};

export default Filter;
