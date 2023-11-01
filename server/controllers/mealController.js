//Imports
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

//Models
const { Meal } = require('../models/mealModel');

module.exports.getAllMeals = (req, res) => {
    Meal.find({ user: req.params.userId })
        .populate('user')
        .then(meals => res.json(meals))
        .catch(error => res.status(500).json({ error: error.message }));
};

module.exports.getMealById = (req, res) => {
    Meal.findOne({ _id: req.params.mealId, user: req.params.userId })
        .populate('user')
        .then(meal => {
            if (!meal) {
                return res.status(404).json({ error: 'Meal not found' });
            }
            res.json(meal);
        })
        .catch(error => res.status(500).json({ error: error.message }));
};

module.exports.createMeal = (req, res) => {
    const meal = new Meal({ ...req.body, user: req.params.userId });
    meal.save()
        .then(savedMeal => res.status(201).json(savedMeal))
        .catch(error => res.status(400).json({ error: error.message }));
};

module.exports.updateMeal = (req, res) => {
    Meal.findOneAndUpdate(
        { _id: req.params.mealId, user: req.params.userId },
        req.body,
        { new: true }
    )
        .then(updatedMeal => {
            if (!updatedMeal) {
                return res.status(404).json({ error: 'Meal not found' });
            }
            res.json(updatedMeal);
        })
        .catch(error => res.status(400).json({ error: error.message }));
};

module.exports.deleteMeal = (req, res) => {
    Meal.findOneAndDelete({ _id: req.params.mealId, user: req.params.userId })
        .then(deletedMeal => {
            if (!deletedMeal) {
                return res.status(404).json({ error: 'Meal not found' });
            }
            res.json({ message: 'Meal deleted successfully' });
        })
        .catch(error => res.status(500).json({ error: error.message }));
};