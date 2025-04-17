import { addTodo, deleteTodo, setCurrentTodo, updateTodo } from './action';

const initialState = {
  items: [],
  currentTodo: null,
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case addTodo.type:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case deleteTodo.type:
      return {
        ...state,
        items: state.items.filter(todo => todo.id !== action.payload),
      };
    case setCurrentTodo.type:
      return {
        ...state,
        currentTodo: action.payload,
      };
    case updateTodo.type:
      return {
        items: state.items.map(todo =>
          todo.id === state.currentTodo.id
            ? { ...state.currentTodo, text: action.payload }
            : todo
        ),
        currentTodo: null,
      };
    default:
      return state;
  }
};
