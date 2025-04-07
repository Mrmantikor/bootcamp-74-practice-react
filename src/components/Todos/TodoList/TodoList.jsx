import Grid from '../../Grid/Grid';
import GridItem from '../../GridItem/GridItem';
import TodoListItem from '../TodoListItem/TodoListItem';

function TodoList({ todos, deleteTodo }) {
  return (
    <Grid>
      {todos.map((item, index) => (
        <GridItem key={item.id}>
          <TodoListItem
            text={item.text}
            counter={index + 1}
            deleteTodo={deleteTodo}
            id={item.id}
          />
        </GridItem>
      ))}
    </Grid>
  );
}

export default TodoList;
