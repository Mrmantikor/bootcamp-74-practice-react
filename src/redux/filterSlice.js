
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  text: '',
};

const slice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, actions) => {state.text = actions.payload}
  }
})

export const filterReducer = slice.reducer
export const {setFilter} = slice.actions