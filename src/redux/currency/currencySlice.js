import { createSlice } from '@reduxjs/toolkit';
import { fetchBaseCurrency } from './operation';
const initialState = { baseCurrency: '' };

const slice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setBaseCurrency: (state, action) => {
      state.baseCurrency = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchBaseCurrency.fulfilled, (state, action) => {
        state.baseCurrency = action.payload;
      })
      .addCase(fetchBaseCurrency.rejected, state => {
        state.baseCurrency = 'USD';
      }),
});
export const { setBaseCurrency } = slice.actions;
export const currencyReducer = slice.reducer;
