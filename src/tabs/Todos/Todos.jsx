import { nanoid } from 'nanoid';

import Form from '../../components/Form/Form';
import TodoList from '../../components/Todos/TodoList/TodoList';
import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';
import { useLocalStorage } from '../../hooks/useLocalStorage';

function Todos() {
  const [todos, setTodos] = useLocalStorage('TODOS', []);

  const addTodo = value => {
    setTodos([
      ...todos,
      {
        text: value,
        id: nanoid(),
      },
    ]);
  };
  const deleteTodo = todoId => {
    setTodos(todos.filter(item => item.id !== todoId));
  };

  return (
    <>
      <Section>
        <Container>
          <Form onSubmit={addTodo} />
          <TodoList todos={todos} deleteTodo={deleteTodo} />
        </Container>
      </Section>
    </>
  );
}

export default Todos;
