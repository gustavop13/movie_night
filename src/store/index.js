import { createStore } from 'redux';

const initialState = {
  movies: ['Batman']
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, { count: state.count + 1});
    case 'CREATE':
      console.log('created');
      return state;
    case 'JOIN':
      console.log('joined');
      return state;
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
