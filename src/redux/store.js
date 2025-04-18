import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './todoSlice.js';
import { filterReducer } from './filterSlice.js';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { pointsReducer } from './pointsSlice.js';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  // whitelist: ['todos', 'points']
  blacklist: ['filter']
}

const rootReducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer,
  points: pointsReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store)