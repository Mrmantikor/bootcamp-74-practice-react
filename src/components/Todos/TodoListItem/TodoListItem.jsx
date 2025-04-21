import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import s from './TodoListItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentTodo } from '../../../redux/todos/todoSlice';
import { selectCurrentTodo } from '../../../redux/todos/selectors';
import { deleteTodo } from '../../../redux/todos/operations';

function TodoListItem({ text, counter, id }) {
  const dispatch = useDispatch();
  const currentTodo = useSelector(selectCurrentTodo);
  return (
    <div className={s.box}>
      <h2 className={s.text}>TODO #{counter}</h2>
      <h3>{text}</h3>
      <button
        type="button"
        className={s.deleteButton}
        onClick={() => dispatch(deleteTodo(id))}
        disabled={Boolean(currentTodo)}
      >
        <RiDeleteBinLine size={24} />
      </button>
      <button
        className={s.editButton}
        type="button"
        onClick={() => dispatch(setCurrentTodo({ text, id }))}
        disabled={Boolean(currentTodo)}
      >
        <RiEdit2Line size={24} />
      </button>
    </div>
  );
}

export default TodoListItem;
