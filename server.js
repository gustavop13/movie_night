var http = require('http');
var server = http.createServer();
var socket_io = require('socket.io');

server.listen(8000);

var io = socket_io();

io.attach(server);

let movie_list = [];

io.on('connection', function(socket){
  console.log("Socket connected: " + socket.id);
  socket.on('action', (action) => {
    if(action.type === 'server/hello'){
      socket.emit('action', {type: 'message', data: movie_list});
    } else if(action.type === 'server/CREATE') {
      socket.join('1');
      movie_list.push(action.data);
      socket.emit('action', {type: 'CREATE', data: movie_list});
    } else if(action.type === 'server/JOIN') {
      socket.emit('action', {type: 'JOIN', data:'good day!'});
    } else if(action.type === 'server.EXIT') {
      socket.emit('action', {type: 'EXIT', data: 'exited'});
    }
  });
});
