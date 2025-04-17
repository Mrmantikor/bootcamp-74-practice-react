import TodoList from '../../components/Todos/TodoList/TodoList.jsx';
import Section from '../../components/Section/Section.jsx';
import Container from '../../components/Container/Container.jsx';
import { TodoForm } from '../../components/Todos/TodoForm/TodoForm.jsx';
import EditForm from '../../components/Todos/EditForm/EditForm.jsx';
import { useSelector } from 'react-redux';
import { selectCurrentTodo, selectTodos } from '../../redux/selectors.js';
import Filter from '../../components/Todos/Filter/Filter.jsx';

function Todos() {
  const currentTodo = useSelector(selectCurrentTodo);
  const todos = useSelector(selectTodos);
  return (
    <>
      <Section>
        <Container>
          {currentTodo ? (
            <EditForm initialValue={currentTodo.text} />
          ) : (
            <TodoForm />
          )}
          {todos.length > 0 && <Filter />}
          <TodoList />
        </Container>
      </Section>
    </>
  );
}

export default Todos;
