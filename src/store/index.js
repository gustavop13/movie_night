import { createStore, applyMiddleware } from 'redux';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';

let socket = io('http://localhost:8000');
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

const initialState = {
  movies: [],
  place: 'lobby',
  room_number: 0
}

function reducer(state = initialState, action){
  switch(action.type){
    case 'CREATE':
      return Object.assign({}, {movies: action.data.movies, place: action.data.place, room_number: action.data.room_number});
    case 'JOIN':
      return Object.assign({}, {movies: action.data.movies, place: action.data.place});
    case 'EXIT':
      return Object.assign({}, {place: 'lobby'});
    default:
      return state;
  }
}

let store = applyMiddleware(socketIoMiddleware)(createStore)(reducer);
store.subscribe(()=>{
  console.log('new client state', store.getState());
});

export default store;
