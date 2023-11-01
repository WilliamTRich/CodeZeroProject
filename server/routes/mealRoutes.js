const mealController = require('../controllers/mealController');

module.exports = (app) => {
    app.post('/api/meals/:userId', trainerController.createMeal);
    app.patch('/api/meals/:userId/:id', mealController.updateMeal);
    app.delete('/api/meals/:userId/:id', mealController.deleteMeal);
    app.get('/api/meals/:userId', mealController.getAllMeals);
    app.get('/api/meals/:userId/:id', mealController.getMealById);
};
