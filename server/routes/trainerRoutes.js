const trainerController = require('../controllers/trainerController');
const { authenticate } = require('../config/jwtConfig'); // will remove in switch to oauth


module.exports = (app) => {
    // app.get('/api/allTrainers', authenticate, trainerController.index)
    // app.get('/api/cookie', trainerController.cookie)
    app.post('/api/registerTrainer', trainerController.registerTrainer)
    app.post('/api/loginTrainer', trainerController.loginTrainer)
    app.get('/api/logoutTrainer', trainerController.logoutTrainer)
    app.get('/api/getTrainer', trainerController.getTrainer)
    // app.get('/api/findUserAndTrainerById', trainerController.findUserAndTrainerById)
    app.get('/api/allTrainers', trainerController.findAllTrainers)
    app.get('/api/findOneTrainer', trainerController.findOneTrainer)

}

// attempt to test route adding date to db in terminal

// $headers = @{
//     "Content-Type" = "application/json"
// }

// $jsonBody = @{
//     "firstName" = "John"
//     "lastName"= "Doe"
//     "email"= "john.doe@example.com"
//     "password" = "password123"
// } | ConvertTo-Json

// Invoke-WebRequest -Uri "http://localhost:8000/api/registerTrainer" -Method Post -Headers $headers -Body $jsonBody
// // or Invoke-RestMethod 