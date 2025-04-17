import { setFilter } from './action';

const initialState = {
  text: '',
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case setFilter.type:
      return {
        text: action.payload,
      };
    default:
      return state;
  }
};
