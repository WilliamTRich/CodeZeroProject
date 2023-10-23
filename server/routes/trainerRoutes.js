const trainerController = require('../controllers/trainerController');

module.exports = (app) => {
    app.post('/api/trainers', trainerController.registerTrainer);
    app.post('/api/trainers/login', trainerController.loginTrainer);
    app.patch('/api/trainers/:id', trainerController.updateTrainer);
    app.delete('/api/trainers/:id', trainerController.deleteTrainer);
    app.get('/api/trainers', trainerController.getTrainers);
    app.get('/api/trainers/:id', trainerController.getTrainer);
};
