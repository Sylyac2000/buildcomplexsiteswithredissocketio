const express = require('express'),
 socketio = require('socket.io');

const app = express();

const server = app.listen(4000)

const io = socketio(server)

//load a middleware
app.use(express.static('static'))

io.on('connection', function (socket) {
    console.log('a socket is opened');
    console.log(socket);
});
