import { useSelector } from 'react-redux';
import Grid from '../../Grid/Grid';
import GridItem from '../../GridItem/GridItem';
import TodoListItem from '../TodoListItem/TodoListItem';
import { selectFilterTodo, selectTodos } from '../../../redux/selectors';

function TodoList() {
  const todos = useSelector(selectTodos);
  const filter = useSelector(selectFilterTodo);
  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <Grid>
      {filteredTodos.map((item, index) => (
        <GridItem key={item.id}>
          <TodoListItem text={item.text} counter={index + 1} id={item.id} />
        </GridItem>
      ))}
    </Grid>
  );
}

export default TodoList;
