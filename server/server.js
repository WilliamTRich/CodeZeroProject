//Imports
const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/userRoutes')

const app = express();

app.use(cors());
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new

const db = require('./models')
db.sequelize.sync({force: true})
    .then(() => console.log("Synced to DB"))
    .catch((e) => console.log(e))

require('./routes/userRoutes')(app)
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})

