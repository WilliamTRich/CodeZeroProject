const workoutController = require('../controllers/workoutController');

module.exports = (app) => {
    app.post('/api/workouts/:userId', trainerController.createWorkout);
    app.patch('/api/workouts/:userId/:id', workoutController.updateWorkout);
    app.delete('/api/workouts/:userId/:id', workoutController.deleteWorkout);
    app.get('/api/workouts/:userId', workoutController.getAllWorkouts);
    app.get('/api/workouts/:userId/:id', workoutController.getWorkoutById);
};
