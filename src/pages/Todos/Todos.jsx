import { useState } from 'react';
import { nanoid } from 'nanoid';
import TodoList from '../../components/Todos/TodoList/TodoList.jsx';
import Section from '../../components/Section/Section.jsx';
import Container from '../../components/Container/Container.jsx';
import { useLocalStorage } from '../../hooks/useLocalStorage.js';
import { TodoForm } from '../../components/Todos/TodoForm/TodoForm.jsx';
import EditForm from '../../components/Todos/EditForm/EditForm.jsx';

function Todos() {
  const [todos, setTodos] = useLocalStorage('TODOS', []);
  const [currentTodo, setCurrentTodo] = useState(null);

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

  const setTodo = todo => {
    setCurrentTodo(todo);
  };

  const updateTodo = text => {
    setTodos(
      todos.map(item =>
        item.id === currentTodo.id ? { ...currentTodo, text } : item
      )
    );
    cancelUpdate();
  };

  const cancelUpdate = () => {
    setCurrentTodo(null);
  };
  return (
    <>
      <Section>
        <Container>
          {currentTodo ? (
            <EditForm
              initialValue={currentTodo.text}
              updateTodo={updateTodo}
              cancelUpdate={cancelUpdate}
            />
          ) : (
            <TodoForm onSubmit={addTodo} />
          )}
          <TodoList
            todos={todos}
            deleteTodo={deleteTodo}
            setTodo={setTodo}
            isEditing={Boolean(currentTodo)}
          />
        </Container>
      </Section>
    </>
  );
}

export default Todos;
