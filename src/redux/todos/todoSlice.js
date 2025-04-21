import { createSlice } from '@reduxjs/toolkit';
import { addTodo, deleteTodo, fetchTodos, updateTodo } from './operations';

const initialState = {
  items: [],
  currentTodo: null,
  isLoading: false,
  isError: '',
};

const slice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setCurrentTodo: (state, action) => {
      state.currentTodo = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.items = state.items.filter(todo => todo.id !== action.payload.id);
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.items = state.items.map(todo =>
          todo.id === action.payload.id ? action.payload : todo
        );
        state.currentTodo = null;
      })
      .addMatcher(
        action => action.type.endsWith('pending'),
        state => {
          state.isLoading = true;
          state.isError = '';
        }
      )
      .addMatcher(
        action => action.type.endsWith('rejected'),
        (state, action) => {
          state.isLoading = false;
          state.isError = action.payload;
        }
      )
      .addMatcher(
        action => action.type.endsWith('fulfilled'),
        state => {
          state.isLoading = false;
        }
      );
  },
});

export const todoReducer = slice.reducer;
export const { setCurrentTodo } = slice.actions;
