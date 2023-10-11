const trainerController = require('../controllers/trainerController');
const { authenticate } = require('../config/jwtConfig'); // will remove in switch to oauth


module.exports = (app) => {
    // app.get('/api/allTrainers', authenticate, trainerController.index)
    // app.get('/api/cookie', trainerController.cookie)
    app.post('/api/registerTrainer', trainerController.registerTrainer)
    app.post('/api/loginTrainer', trainerController.loginTrainer)
    app.get('/api/logoutTrainer', trainerController.logoutTrainer)
    app.get('/api/getTrainer', trainerController.getTrainer)
    app.get('/api/findUserAndTrainerById', trainerController.findUserAndTrainerById)
    app.get('/api/allTrainers', trainerController.findAllTrainers)
    app.get('/api/findOneTrainer', trainerController.findOneTrainer)

}