const mealController = require('../controllers/mealController');

module.exports = (app) => {
    app.post('/api/meals', trainerController.createMeal);
    app.patch('/api/meals/:id', mealController.updateMeal);
    app.delete('/api/meals/:id', mealController.deleteMeal);
    app.get('/api/meals', mealController.getAllMeals);
    app.get('/api/meals/:id', mealController.getMealById);
};
