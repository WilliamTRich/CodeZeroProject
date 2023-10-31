//Imports
const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
require('dotenv').config();
require('./config/mongooseConfig');

const app = express();

app.use(cors({ exposedHeaders: 'X-Authorization' }));
app.use(express.json(), express.urlencoded({ extended: true }));

require('./routes/clientRoutes')(app);
require('./routes/trainerRoutes')(app);

const httpServer = createServer(app);

httpServer.listen(8000, () => console.log('Server is ready on port 8000'));
