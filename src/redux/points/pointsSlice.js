import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  one: 0,
  two: 0,
  three: 0,
  four: 0,
  five: 0,
};

const slice = createSlice({
  name: 'points',
  initialState,
  reducers:{
        addPoint: (state, { payload }) => {
          const {key, value} = payload;
          state[key] = state[key] + value
        },
        resetPoints: () => initialState
  }
})

export const pointsReducer = slice.reducer
export const {addPoint, resetPoints} = slice.actions