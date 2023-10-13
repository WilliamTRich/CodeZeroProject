// this file could be just added to the others instead of being sep.


const associationController = require('../controllers/associationController');


module.exports = (app) => {
    app.get('/api/findUserAndTrainerById', associationController.findUserAndTrainerById)
    app.get('/api/findUsersByTrainerId', associationController.findUsersByTrainerId)


}

