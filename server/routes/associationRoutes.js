// this file could be just added to the others instead of being sep.


const associationController = require('../controllers/associationController');
const { authenticate } = require('../config/jwtConfig'); // will remove in switch to oauth


module.exports = (app) => {
    app.get('/api/findUserAndTrainerById', associationController.findUserAndTrainerById)
    app.get('/api/findUsersByTrainerId', associationController.findUsersByTrainerId)


}

