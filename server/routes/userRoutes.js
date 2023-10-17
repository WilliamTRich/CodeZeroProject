const userController = require('../controllers/userController');

module.exports = (app) => {
    app.post('/api/users', userController.registerUser);
    app.post('/api/users/login', userController.loginUser);
    app.patch('/api/users/:id', userController.updateUser);
    app.delete('/api/users/:id', userController.deleteUser);
    app.get('/api/users', userController.getUsers);
    app.get('/api/users/:id', userController.getUser);
};
