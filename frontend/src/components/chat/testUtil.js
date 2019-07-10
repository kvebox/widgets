import socketIOClient from 'socket.io-client';

function connect(cb) {
    const socket = socketIOClient('localhost:4001');
    socket.on('chat', message => {
        // console.log(message);

        cb(message);
    });
}

export {connect};