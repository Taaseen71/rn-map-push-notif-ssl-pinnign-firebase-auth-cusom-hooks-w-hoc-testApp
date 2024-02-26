import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  pokemons: [],
  isFetching: false,
  failure: false,
  errorMessage: undefined,
};

export const pokeSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    request: state => {
      state.isFetching = true;
    },
    success: (state, action) => {
      state.isFetching = false;
      state.pokemons = action.payload;
      state.failure = false;
      state.errorMessage = undefined;
    },
    failure: (state, action) => {
      state.isFetching = false;
      state.failure = true;
      state.errorMessage = action.payload;
    },
  },
});

export const {request, success, failure} = pokeSlice.actions;

export default pokeSlice.reducer;
