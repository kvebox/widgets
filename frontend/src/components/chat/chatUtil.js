// const express = require('express');
// const http = require('http');
// const socketIO = require('socket.io');

// // our localhost port
// const port = 4001;

// const app = express();

// // our server instance
// const server = http.createServer(app);

// // This creates our socket using the instance of the server
// const io = socketIO(server);

// // This is what the socket.io syntax is like, we will work this later





// io.set('origins', '*:*');

// // io.on('connection', socket => {
// //     console.log('client successfully connected');
// //     io.emit('chat', 'hello world');
// // });

// io.on('connection', socket => {
//     console.log('New client connected');
    
//     socket.on('chat message', msg => {
//         socket.emit('chat message', msg);
//         console.log('sent');
//     });


//     // disconnect is fired when a client leaves the server
//     socket.on('disconnect', () => {
//         console.log('user disconnected');
//     });
// });

// server.listen(port, function(err){
//     if (err) throw err;
//     console.log(`Listening on port ${port}`)
// });

