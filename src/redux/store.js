import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './todoReducer';
import { filterReducer } from './filterReducer';

export const store = configureStore({
  reducer: { todos: todoReducer, filter: filterReducer },
});
