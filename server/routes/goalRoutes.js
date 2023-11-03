const goalController = require('../controllers/goalController');

module.exports = (app) => {
    app.post('/api/goals/:userId', goalController.createGoal);
    app.patch('/api/goals/:userId/:goalId', goalController.updateGoal);
    app.delete('/api/goals/:userId/:goalId', goalController.deleteGoal);
    app.get('/api/goals/:userId', goalController.getAllGoals);
    app.get('/api/goals/:userId/:goalId', goalController.getGoalById);
};
