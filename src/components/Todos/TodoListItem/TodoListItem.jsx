import { RiDeleteBinLine } from 'react-icons/ri';
import s from './TodoListItem.module.css';
function TodoListItem({ text, counter, deleteTodo, id }) {
  return (
    <div className={s.box}>
      <h2 className={s.text}>TODO #{counter}</h2>
      <h3>{text}</h3>
      <button
        type="button"
        className={s.deleteButton}
        onClick={() => deleteTodo(id)}
      >
        <RiDeleteBinLine size={24} />
      </button>
    </div>
  );
}

export default TodoListItem;
