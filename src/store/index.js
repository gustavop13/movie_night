import { createStore } from 'redux';
import { postMovie } from '../api';

const initialState = {
  movies: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    // case 'INCREMENT':
    //   return Object.assign({}, state, { count: state.count + 1});
    case 'CREATE':
      postMovie("Avengu");
      return Object.assign({}, state, { movies: state.movies });
    case 'JOIN':
      console.log('joined');
      return state;
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
