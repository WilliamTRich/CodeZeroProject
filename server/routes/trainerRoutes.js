const Controller = require('../controllers/trainerController');

module.exports = (app) => {
    app.get('/api', Controller.index)//test route
    app.get('/api/trainer/:id', Controller.findOne)//find one
    app.get('/api/trainers', Controller.findAll)//find all
    app.post('/api/trainer/new', Controller.create)//create route
    app.put('/api/trainer/edit/:id', Controller.updateOne)//update one route
    app.delete('/api/trainer/:id', Controller.deleteOne)//delete one route
}