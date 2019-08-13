const io = require('socket.io')();

io.on('connection', (client) => {
  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      client.emit('m', new Date());
    }, interval);
  });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);
