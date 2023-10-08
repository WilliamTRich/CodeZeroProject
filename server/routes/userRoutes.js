const Controller = require('../controllers/userController');

module.exports = (app) => {
    app.get('/api', Controller.index)//test route
    app.get('/api/trainer/:id', Controller.findOne)//find one
    app.get('/api/users', Controller.findAll)//find all
    app.post('/api/user/new', Controller.create)//create route
    app.put('/api/user/edit/:id', Controller.updateOne)//update one route
    app.delete('/api/user/:id', Controller.deleteOne)//delete one route
}