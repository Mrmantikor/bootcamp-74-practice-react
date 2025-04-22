import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { filterReducer } from './filter/filterSlice';
import { todoReducer } from './todos/todoSlice';
import { pointsReducer } from './points/pointsSlice';
import { currencyReducer } from './currency/currencySlice';

const persistCurrencyConfig = {
  key: 'currency',
  version: 1,
  storage,
  whitelist: ['baseCurrency'],
  // blacklist: ['filter', 'todos'],
};

const persistedCurrencyReducer = persistReducer(
  persistCurrencyConfig,
  currencyReducer
);

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    filter: filterReducer,
    points: pointsReducer,
    currency: persistedCurrencyReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
