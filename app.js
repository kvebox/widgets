const mongoose = require('mongoose');
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');
const http = require('http');
const socketIO = require('socket.io');

const passport = require('passport');
app.use(passport.initialize());
require('./config/passport')(passport);

//importing routes
const users = require("./routes/api/users");

mongoose 
    .connect(db, {useNewUrlParser: true})
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// app.get("/", (req, res) => res.send("hello world"));

// tell express to use newly imported routes
app.use("/api/users", users);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));


app.use('/', express.static('frontend'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

// our localhost port
const socketPort = 4001;

// our server instance
const server = http.createServer(app);

// This creates our socket using the instance of the server
const io = socketIO(server);

// This is what the socket.io syntax is like, we will work this later


// io.set('origins', '*:*');
// const namespace = io.of('/testRoom');

io.on('connection', function(socket){
// namespace.on('connection', function(socket){

    socket.join('default');

    socket.on('chat message', msg => {
        socket.to('default').emit('chat message', msg);
    //     // socket.emit('chat message', msg);
    //     // socket.broadcast.emit('hi')
        // socket.to('default').broadcast.emit('chat message', msg);
    });


    // disconnect is fired when a client leaves the server
    socket.on('disconnect', () => {
        // socket.leave('default');
        console.log('user disconnected');
    });
});


server.listen(socketPort, function (err) {
    if (err) throw err;
    console.log(`Listening on port ${socketPort}`);
});
