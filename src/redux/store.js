import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { filterReducer } from './filter/filterSlice';
import { todoReducer } from './todos/todoSlice';
import { pointsReducer } from './points/pointsSlice';

// const persistConfig = {
//   key: 'root',
//   version: 1,
//   storage,
//   // whitelist: ['todos', 'points']
//   blacklist: ['filter'],
// };

const rootReducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer,
  points: pointsReducer,
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,

  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

// export const persistor = persistStore(store);
