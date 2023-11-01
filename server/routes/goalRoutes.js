const goalController = require('../controllers/goalController');

module.exports = (app) => {
    app.post('/api/goals/:userId', goalController.createGoal);
    app.patch('/api/goals/:userId/:id', goalController.updateGoal);
    app.delete('/api/goals/:userId/:id', goalController.deleteGoal);
    app.get('/api/goals/:userId', goalController.getAllGoals);
    app.get('/api/goals/:userId/:id', goalController.getGoalById);
};
