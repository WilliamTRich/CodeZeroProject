//Imports
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

require('dotenv').config();

//Models
const Goal = require('../models/goalModel');

module.exports.getAllGoals = (req, res) => {
    const userId = req.params.userId;
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ message: 'Invalid user ID' });
    }
    Goal.find({
        $or: [{ client: userId }, { trainer: userId }],
    })
        .populate({
            path: 'user',
            options: { strictPopulate: false },
        })
        .then((goals) => {
            if (goals.length > 0) {
                res.json(goals);
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

module.exports.getGoalById = (req, res) => {
    const { userId, goalId } = req.params;
    Goal.findOne({
        _id: goalId,
        $or: [{ client: userId }, { trainer: userId }],
    })
        .populate({
            path: 'user',
            options: { strictPopulate: false },
        })
        .then((goal) => {
            if (!goal) {
                return res.status(404).json({ error: 'Goal not found' });
            }
            res.json(goal);
        })
        .catch((error) => res.status(500).json({ error: error.message }));
};

module.exports.createGoal = (req, res) => {
    const goal = new Goal({ ...req.body, user: req.params.userId });
    goal.save()
        .then((savedGoal) => res.status(201).json(savedGoal))
        .catch((error) => res.status(400).json({ error: error.message }));
};

module.exports.updateGoal = (req, res) => {
    Goal.findOneAndUpdate(
        {
            _id: req.params.goalId,
            $or: [
                { client: req.params.userId },
                { trainer: req.params.userId },
            ],
        },
        req.body,
        { new: true },
    )
        .then((updatedGoal) => {
            if (!updatedGoal) {
                return res.status(404).json({ error: 'Goal not found' });
            }
            res.json(updatedGoal);
        })
        .catch((error) => res.status(400).json({ error: error.message }));
};

module.exports.deleteGoal = (req, res) => {
    const { userId, goalId } = req.params;
    Goal.findOneAndDelete({
        _id: goalId,
        $or: [{ client: userId }, { trainer: userId }],
    })
        .populate({
            path: 'user',
            options: { strictPopulate: false },
        })
        .then((deletedGoal) => {
            if (!deletedGoal) {
                return res.status(404).json({ error: 'Goal not found' });
            }
            res.json({ message: 'Goal deleted successfully' });
        })
        .catch((error) => res.status(500).json({ error: error.message }));
};
