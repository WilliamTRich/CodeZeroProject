//Imports

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")
const http = require('http');
const socket = require('socket.io');
const { createProxyMiddleware } = require('http-proxy-middleware');
const dotenv = require('dotenv');



dotenv.config();
const port = 8000;

const app = express();
// app.use(cors());

app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from this origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, 
}));
app.use(bodyParser.json())
// app.use(parse.json())

app.use(express.json(), express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello");
});

require("./config/mongooseConfig");

require("./routes/userRoutes")(app);
require("./routes/trainerRoutes")(app);
require("./routes/associationRoutes")(app);



// *********************************** usual way of opening up the server ******************************************************//
// app.listen(port, () => {
//   console.log(`Listening on port: ${port}`);
// });

const server = app.listen(port, () =>{
  console.log(`Listening on port: ${port}`);
  }
)

// const wsProxy = createProxyMiddleware('/socket.io', {
//   target: 'http://localhost:3000', 
//   ws: true,
// });

// app.use(wsProxy);

// const proxyServer = http.createServer(app);
// const io = socket(proxyServer);

// io.on('connection', (socket) => {
//   console.log('WebSocket client connected');
//   // Handle WebSocket events here
// });


//************************************************************************** DOJO VERSION******************************************************** */
const io = socket(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    allowedHeaders: ['*'],
    credentials:true,
  }
})

//connection is a built in listener
io.on("connection", socket =>{
  //each client gets a socket id, if this is in the console it means we have a new user
  console.log('new client socket id: ' + socket.id);

  io.on("connect_error", error => {
    console.error("Socket connection error:", error);
});
  //this is sending data to all the other users? might need to modify to find out how to to individ
  io.on("event_from_client", data => {
    // socket.broadcast.emit("event_to_all_other_clients", data);
    console.log("I am in the io.on");
    // io.emit('newMessageFromServer', data);
    // io.emit('newMessageFromServer', 'Hello World.');
    io.broadcast.emit('newMessageFromServer', 'Hello World.');

    console.log("Received message from client: " + data);
    //   io.emit emits an event to all connected clients
    // socket.broadcast.emit emits an event to all clients other than this particular one, referenced by the socket variable
    // socket.emit emits an event directly to this specific client

  });

  // Handle disconnection
  io.on("disconnect", () => {
    console.log("Client disconnected: " + socket.id);
  });
})
//************************************************************************** DOJO VERSION************************************************************ */



//************************************************************************** HACKERMOON VERSION******************************************************** */

// // //making an HTTP server and connecting to a port for the websockets
// // const server = http.createServer((req, res) => {
// //   res.end('Server is running!');
// // });

// // const port2 = 3000;

// // server.listen(port2, () => {
// //   console.log(`Server is listening on port ${port}`);
// // });

// // //attach io server to http server using the lisen method onthe io object and 
// // //passing it to the http server
// // const ioServer = io.listen(server);


// // //connection event to handle new clients connecting to the server. We are also using the message event to handle incoming messages from the client and the disconnect event to handle clients that disconnect from the server.
// // // When a message is received, we simply log it to the console and then emit it back to all connected clients using the emit method.
// // ioServer.on('connection', (socket) => {   
// //     console.log('New client connected');   
// //     socket.on('message', (message) => {     
// //     console.log(`Received message from client: ${message}`);     
// //     ioServer.emit('message', message);   
// //   });   
// //     socket.on('disconnect', () => {     
// //     console.log('Client disconnected');   
// //   }); 
// // });

//************************************************************************** HACKERMOON VERSION******************************************************** */
