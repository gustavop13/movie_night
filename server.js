const io = require('socket.io')();

let list = [];

io.on('connection', (socket) => {
  socket.on('postMovie', (movie) => {
    console.log('created');
    list.push(movie);
    socket.emit('movies', {
      movies: list
    });
  });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);
