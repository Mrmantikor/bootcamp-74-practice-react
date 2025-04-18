import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  items: [],
  currentTodo: null,
};

const slice = createSlice({
  name: 'todo',
  initialState,
  reducers:{
    addTodo:(state, action) => {state.items.push(action.payload)},
    deleteTodo: (state, action) => {state.items = state.items.filter(todo => todo.id !== action.payload)},
    setCurrentTodo: (state, action) => {state.currentTodo = action.payload},
    updateTodo: (state, action) => {state.items = state.items.map(item => item.id === state.currentTodo.id? {...state.currentTodo, text: action.payload} : item);
    state.currentTodo = null}
  }
})

export const todoReducer = slice.reducer
export const {addTodo, deleteTodo, setCurrentTodo, updateTodo} = slice.actions