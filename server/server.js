//Imports
const express = require('express');
const cors = require('cors');
// const userRouter = require('./routes/userRoutes')
const port = 8000;


const app = express();
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));


require("./config/mongooseConfig");
require('./routes/userRoutes')(app)
require('./routes/trainerRoutes')(app)
require('./routes/associationRoutes')(app)

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})

