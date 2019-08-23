import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8000');

function postMovie(cb) {
  socket.on('moviePosted', timestamp => cb(null, timestamp));
  socket.emit('postMovie', 1000);
}
export { postMovie };
