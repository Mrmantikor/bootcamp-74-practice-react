import { createSelector } from '@reduxjs/toolkit';
import { selectFilterTodo } from '../filter/selectors';

export const selectTodos = state => state.todos.items;
export const selectCurrentTodo = state => state.todos.currentTodo;
export const selectIsError = state => state.todos.isError;
export const selectIsLoading = state => state.todos.isLoading;

export const selectFilteredTodos = createSelector(
  [selectTodos, selectFilterTodo],
  (todos, filter) => {
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
