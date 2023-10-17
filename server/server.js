//Imports
const express = require("express");
const cors = require("cors");
require('dotenv').config()
require('./config/mongooseConfig')

const app = express()

app.use(cors())
app.use(express.json(), express.urlencoded({ extended: true }))

require('./routes/userRoutes')(app)

app.listen(8000, () => console.log('Server is ready on port 8000'))