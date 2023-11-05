const mealController = require('../controllers/mealController');

module.exports = (app) => {
    app.post('/api/meals/:userId', mealController.createMeal);
    app.patch('/api/meals/:userId/:mealId', mealController.updateMeal);
    app.delete('/api/meals/:userId/:mealId', mealController.deleteMeal);
    app.get('/api/meals/:userId', mealController.getAllMeals);
    app.get('/api/meals/:userId/:mealId', mealController.getMealById);
};
