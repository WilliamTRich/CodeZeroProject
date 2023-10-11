//Imports


const express = require('express');
const cors = require('cors');
// const userRouter = require('./routes/userRoutes')
const port = 8000;


const cors = require("cors");
const userRouter = require("./routes/userRoutes");
require("dotenv").config();
const port = 8000;

const app = express();
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello");
});

require("./config/mongooseConfig");

require('./routes/userRoutes')(app)
require('./routes/trainerRoutes')(app)
require('./routes/associationRoutes')(app)

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
