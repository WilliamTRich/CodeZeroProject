const express = require('express');
const cors = require('cors');
const app = express();
// const { sequelize } = require("./config/demo_db_connection.js")

app.use(cors());
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new

require("./config/demo_db_connection.js");
// require('./routes/trainerRoutes')(app);
// require('./routes/userRoutes')(app);
// ^^^^ the routes connection needs to be sorted out

app.listen(8000, () => {
    console.log("Listening at Port 8000")
})

