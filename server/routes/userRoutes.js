const userController = require('../controllers/userController');
const { authenticate } = require('../config/jwtConfig'); // will remove in switch to oauth


module.exports = (app) => {
    // app.get('/api/allUsers', authenticate, userController.index)
    // app.get('/api/cookie', userController.cookie)
    app.post('/api/registerUser', userController.registerUser)
    app.post('/api/loginUser', userController.loginUser)
    app.get('/api/logoutUser', userController.logoutUser)
    app.get('/api/getUser', userController.getUser)
    app.get('/api/findUsersByTrainerId', userController.findUsersByTrainerId)
    app.get('/api/allUsers', userController.findAllUsers)
    app.get('/api/findOneUser', userController.findOneUser)

}