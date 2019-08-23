const io = require('socket.io')();

let list = ['lul'];

io.on('connection', (socket) => {
  socket.on('postMovie', function(data, fn) {
    list.push(movie);
  });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);
