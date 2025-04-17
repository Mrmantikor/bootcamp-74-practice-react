import { createAction } from '@reduxjs/toolkit';

export const addTodo = createAction('addTodo');
export const deleteTodo = createAction('deleteTodo');
export const setCurrentTodo = createAction('setCurrentTodo');
export const updateTodo = createAction('updateTodo');
export const setFilter = createAction('setFilter');
