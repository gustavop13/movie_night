import { createStore } from 'redux';
import { postMovie } from '../api';

const initialState = {
  movies: ["bootmen", "avengus"]
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    // case 'INCREMENT':
    //   return Object.assign({}, state, { count: state.count + 1});
    case 'CREATE':
      console.log('created');
      postMovie();
      return Object.assign({}, state, { movies: [1, 2, 3] });
    case 'JOIN':
      console.log('joined');
      return state;
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
