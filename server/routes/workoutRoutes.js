const workoutController = require('../controllers/workoutController');

module.exports = (app) => {
    app.post('/api/workouts/:userId', workoutController.createWorkout);
    app.patch('/api/workouts/:userId/:workoutId', workoutController.updateWorkout);
    app.delete('/api/workouts/:userId/:workoutId', workoutController.deleteWorkout);
    app.get('/api/workouts/:userId', workoutController.getAllWorkouts);
    app.get('/api/workouts/:userId/:workoutId', workoutController.getWorkoutById);
};
