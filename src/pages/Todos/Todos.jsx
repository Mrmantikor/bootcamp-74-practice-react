import TodoList from '../../components/Todos/TodoList/TodoList.jsx';
import Section from '../../components/Section/Section.jsx';
import Container from '../../components/Container/Container.jsx';
import { TodoForm } from '../../components/Todos/TodoForm/TodoForm.jsx';
import EditForm from '../../components/Todos/EditForm/EditForm.jsx';
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../../components/Todos/Filter/Filter.jsx';
import {
  selectCurrentTodo,
  selectIsError,
  selectIsLoading,
  selectTodos,
} from '../../redux/todos/selectors.js';
import { useEffect } from 'react';
import { fetchTodos } from '../../redux/todos/operations.js';
import Loader from '../../components/Loader/Loader.jsx';
import Heading from '../../components/Heading/Heading.jsx';

function Todos() {
  const currentTodo = useSelector(selectCurrentTodo);
  const todos = useSelector(selectTodos);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <>
      <Section>
        <Container>
          {currentTodo ? <EditForm {...currentTodo} /> : <TodoForm />}
          {todos.length > 0 && <Filter />}
          <TodoList />
          {isLoading && <Loader />}
          {isError && (
            <Heading
              text={`Something went wrong! ${isError}`}
              mTop
              variant="error"
            />
          )}
        </Container>
      </Section>
    </>
  );
}

export default Todos;
