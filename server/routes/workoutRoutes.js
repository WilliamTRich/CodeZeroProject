const workoutController = require('../controllers/workoutController');

module.exports = (app) => {
    app.post('/api/workouts', trainerController.createWorkout);
    app.patch('/api/workouts/:id', workoutController.updateWorkout);
    app.delete('/api/workouts/:id', workoutController.deleteWorkout);
    app.get('/api/workouts', workoutController.getAllWorkouts);
    app.get('/api/workouts/:id', workoutController.getWorkoutById);
};
