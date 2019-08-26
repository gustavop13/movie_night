import { createStore, applyMiddleware } from 'redux';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';

let socket = io('http://localhost:8000');
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

const initialState = {
  movies: []
}

function reducer(state = initialState, action){
  switch(action.type){
    case 'message':
      return Object.assign({}, {movies: state.movies, message:action.data});
    default:
      return state;
  }
}

let store = applyMiddleware(socketIoMiddleware)(createStore)(reducer);
store.subscribe(()=>{
  console.log('new client state', store.getState());
});

store.dispatch({type:'server/hello', data:'Hello!'});

export default store;
