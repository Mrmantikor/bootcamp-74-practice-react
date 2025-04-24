import { createSlice } from '@reduxjs/toolkit';
import { loginThuk, logoutThunk, registerThunk } from './authOperations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isRefreshing: false,
};
const slice = createSlice({
  name: 'authorization',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(registerThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(registerThunk.rejected, state => {
        state.isLoading = false;
      })
      .addCase(loginThuk.pending, state => {
        state.isLoading = true;
      })
      .addCase(loginThuk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginThuk.rejected, state => {
        state.isLoading = false;
      })
      .addCase(logoutThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(logoutThunk.fulfilled, state => {
        state.isLoading = false;
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logoutThunk.rejected, state => {
        state.isLoading = false;
      }),
});

export const authorizationReducer = slice.reducer;
