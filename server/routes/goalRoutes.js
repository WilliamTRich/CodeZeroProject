const goalController = require('../controllers/goalController');

module.exports = (app) => {
    app.post('/api/goals', trainerController.createGoal);
    app.patch('/api/goals/:id', goalController.updateGoal);
    app.delete('/api/goals/:id', goalController.deleteGoal);
    app.get('/api/goals', goalController.getAllGoals);
    app.get('/api/goals/:id', goalController.getGoalById);
};
