import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import s from './TodoListItem.module.css';

function TodoListItem({ text, counter, deleteTodo, id, setTodo, isEditing }) {
  return (
    <div className={s.box}>
      <h2 className={s.text}>TODO #{counter}</h2>
      <h3>{text}</h3>
      <button
        type="button"
        className={s.deleteButton}
        onClick={() => deleteTodo(id)}
        disabled={isEditing}
      >
        <RiDeleteBinLine size={24} />
      </button>
      <button className={s.editButton} type="button" onClick={()=>setTodo({text, id})} disabled={isEditing}>
        <RiEdit2Line size={24} />
      </button>
    </div>
  );
}

export default TodoListItem;
