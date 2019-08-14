import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8000');

function postMovie(cb) {
  socket.emit('postMovie', ["movieslul"]);
}
export { postMovie };
