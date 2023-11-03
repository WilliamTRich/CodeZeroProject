//Imports
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');
const socket = require('socket.io');
const { createProxyMiddleware } = require('http-proxy-middleware');
const dotenv = require('dotenv');

dotenv.config();
const port = 8000;

const app = express();

app.use(
    cors({
        origin: 'http://localhost:5173', // Allow requests from this origin
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
        exposedHeaders: 'X-Authorization', // Expose X-Authorization header in response
    }),
);
app.use(express.json(), express.urlencoded({ extended: true }));

require('./config/mongooseConfig');
require('./routes/clientRoutes')(app);
require('./routes/trainerRoutes')(app);
require('./routes/associationRoutes')(app);
require('./routes/goalRoutes')(app);
require('./routes/mealRoutes')(app);
require('./routes/workoutRoutes')(app);

// require('./routes/eventRoutes')(app);
require('./routes/messageRoutes')(app);

const server = app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});

/************************************************************************** DOJO VERSION******************************************************** */
const io = socket(server, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST'],
        allowedHeaders: ['*'],
        credentials: true,
    },
});

io.on('connection', (socket) => {
    console.log('new client socket id: ' + socket.id);

    socket.on('newMessageFromClient', (data) => {
        console.log('Received message from client: ' + data);
        io.emit('newMessageFromServer', data);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected: ' + socket.id);
    });
});
