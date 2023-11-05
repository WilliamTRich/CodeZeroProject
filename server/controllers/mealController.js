//Imports
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

require('dotenv').config();

//Models
const Meal = require('../models/mealModel');

module.exports.getAllMeals = (req, res) => {
    const userId = req.params.userId;
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ message: 'Invalid user ID' });
    }
    Meal.find({
        $or: [{ client: userId }, { trainer: userId }],
    })
        .populate({
            path: 'user',
            options: { strictPopulate: false },
        })
        .then((meals) => {
            if (meals.length > 0) {
                res.json(meals);
            } else {
                res.status(404).json({
                    message: 'No goals found for the user.',
                });
            }
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: error.message });
        });
};


module.exports.getMealById = (req, res) => {
    const { userId, mealId } = req.params;
    Meal.findOne({
        _id: mealId,
        $or: [{ client: userId }, { trainer: userId }],
    })
        .populate({
            path: 'user',
            options: { strictPopulate: false },
        })
        .then((meal) => {
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
        {
            _id: req.params.mealId,
            $or: [
                { client: req.params.userId },
                { trainer: req.params.userId },
            ],
        },
        req.body,
        { new: true },
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
    const { userId, mealId } = req.params;

    Meal.findOneAndDelete({
        _id: mealId,
        $or: [{ client: userId }, { trainer: userId }],
    })
    .populate({
        path: 'user',
        options: { strictPopulate: false },
    })
    .then((deletedMeal) => {
        if (!deletedMeal) {
            return res.status(404).json({ error: 'Meal not found' });
        }
        res.json({ message: 'Workout deleted successfully' });
    })
        .catch(error => res.status(500).json({ error: error.message }));
};