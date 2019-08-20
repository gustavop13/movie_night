const io = require('socket.io')();

let list = ['lul'];

io.on('connection', (socket) => {
  socket.on('postMovie', (movie) => {
    list.push(movie);
    socket.emit('movies', {
      movies: list
    });
    console.log(list);
  });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);
