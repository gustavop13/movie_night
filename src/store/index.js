import { createStore, applyMiddleware } from 'redux';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';

let socket = io('http://localhost:8000');
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

const initialState = {
  movies: [],
  joined: false
}

function reducer(state = initialState, action){
  switch(action.type){
    case 'CREATE':
      return Object.assign({}, {movies: action.data.movies, joined: true});
    case 'JOIN':
      return Object.assign({}, {movies: action.data, joined: true});
    case 'EXIT':
      return Object.assign({}, {movies: action.data});
    default:
      return state;
  }
}

let store = applyMiddleware(socketIoMiddleware)(createStore)(reducer);
store.subscribe(()=>{
  console.log('new client state', store.getState());
});

export default store;
