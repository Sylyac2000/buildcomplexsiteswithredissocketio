const express = require('express'),
 socketio = require('socket.io');

const app = express();

const server = app.listen(4000)

const io = socketio(server)

//load a middleware
app.use(express.static('static'))

/*The socket object is a connection from one browser to the server,
   while the IO object is a server object, which will know about all
   the other connections*/
io.on('connection',  (socket) => {
    //send to all without me
    socket.broadcast.emit('user.events', 'someone has joined')

    socket.on('name', (name) => {
        console.log(name + ' says Hello!');
        //send to all without me
        socket.broadcast.emit('name', name);
    })
});
