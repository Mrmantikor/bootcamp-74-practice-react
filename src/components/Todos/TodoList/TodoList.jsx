import { useSelector } from 'react-redux';
import Grid from '../../Grid/Grid';
import GridItem from '../../GridItem/GridItem';
import TodoListItem from '../TodoListItem/TodoListItem';
import { selectFilteredTodos } from '../../../redux/todos/selectors';

function TodoList() {
  const todos = useSelector(selectFilteredTodos);
  return (
    <Grid>
      {todos.map((item, index) => (
        <GridItem key={item.id}>
          <TodoListItem text={item.text} counter={index + 1} id={item.id} />
        </GridItem>
      ))}
    </Grid>
  );
}

export default TodoList;
