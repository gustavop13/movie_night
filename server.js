var http = require('http');
var server = http.createServer();
var socket_io = require('socket.io');

server.listen(8000);

var io = socket_io();

io.attach(server);

let movie_map = new Map();
movie_map.set("1", "Lyfe");
let movie_list = [];

io.on('connection', function(socket){
  console.log("Socket connected: " + socket.id);
  socket.on('action', (action) => {
    if(action.type === 'server/CREATE') {
      socket.join('1');
      socket.to('1').emit('action', {type: 'CREATE', data: {movies: [movie_map.get("1")], joined: true}});
    } else if(action.type === 'server/JOIN') {
      socket.emit('action', {type: 'JOIN', data: {movies: [], joined: true}});
    } else if(action.type === 'server/EXIT') {
      socket.emit('action', {type: 'EXIT', data: []});
    }
  });
});
