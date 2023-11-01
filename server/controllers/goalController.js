//Imports
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

//Models
const { Goal } = require('../models/goalModel');

module.exports.getAllGoals = (req, res) => {
    Goal.find({ user: req.params.userId })
        .populate('user')
        .then(goals => res.json(goals))
        .catch(error => res.status(500).json({ error: error.message }));
};

module.exports.getGoalById = (req, res) => {
    Goal.findOne({ _id: req.params.goalId, user: req.params.userId })
        .populate('user')
        .then(goal => {
            if (!goal) {
                return res.status(404).json({ error: 'Goal not found' });
            }
            res.json(goal);
        })
        .catch(error => res.status(500).json({ error: error.message }));
};

module.exports.createGoal = (req, res) => {
    const goal = new Goal({ ...req.body, user: req.params.userId });
    goal.save()
        .then(savedGoal => res.status(201).json(savedGoal))
        .catch(error => res.status(400).json({ error: error.message }));
};

module.exports.updateGoal = (req, res) => {
    Goal.findOneAndUpdate(
        { _id: req.params.goalId, user: req.params.userId },
        req.body,
        { new: true }
    )
        .then(updatedGoal => {
            if (!updatedGoal) {
                return res.status(404).json({ error: 'Goal not found' });
            }
            res.json(updatedGoal);
        })
        .catch(error => res.status(400).json({ error: error.message }));
};

module.exports.deleteGoal = (req, res) => {
    Goal.findOneAndDelete({ _id: req.params.goalId, user: req.params.userId })
        .then(deletedGoal => {
            if (!deletedGoal) {
                return res.status(404).json({ error: 'Goal not found' });
            }
            res.json({ message: 'Goal deleted successfully' });
        })
        .catch(error => res.status(500).json({ error: error.message }));
};