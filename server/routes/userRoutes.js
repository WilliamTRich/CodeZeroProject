module.exports = app => {
    const users = require("../controllers/userController")
    const router = require('express').Router();

    router.post('/', users.createUser)

    app.use('/api/users', router)
}
