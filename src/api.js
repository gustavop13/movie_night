import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8000');

function postMovie(movie) {
  socket.on('movies', newMovie => movie);
  socket.emit('postMovie', movie);
}

export { postMovie };
