import { createSlice } from '@reduxjs/toolkit';
import { fetchBaseCurrency, fetchExchangeCurrency } from './operation';
const initialState = {
  baseCurrency: '',
  isLoading: false,
  isError: '',
  exchangeInfo: null,
};

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
      })
      .addCase(fetchExchangeCurrency.pending, state => {
        state.isLoading = true;
        state.isError = '';
      })
      .addCase(fetchExchangeCurrency.fulfilled, (state, action) => {
        state.isLoading = false;
        state.exchangeInfo = action.payload;
      })
      .addCase(fetchExchangeCurrency.rejected, (state, action) => {
        state.isError = action.payload;
        state.isLoading = false;
      }),
});
export const { setBaseCurrency } = slice.actions;
export const currencyReducer = slice.reducer;
