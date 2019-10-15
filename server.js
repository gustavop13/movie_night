var http = require('http');
var server = http.createServer();
var socket_io = require('socket.io');

server.listen(8000);

var io = socket_io();

io.attach(server);

let movie_map = new Map();
movie_map.set('1234', 'MovieName');

io.on('connection', function(socket){
  console.log("Socket connected: " + socket.id);
  socket.on('action', (action) => {
    if(action.type === 'server/CREATE') {
      socket.join('1234');
      io.to('1234').emit('action', {type: 'CREATE', data: {movies: [movie_map.get('1234')], place: 'room', room_number: '1234'}});
    } else if(action.type === 'server/JOIN') {
      socket.join('1234');
      io.to('1234').emit('action', {type: 'JOIN', data: {movies: [movie_map.get('1234')], place: 'hallway'}});
    } else if(action.type === 'server/EXIT') {
      socket.leave();
      socket.emit('action', {type: 'EXIT'});
    }
  });
});
