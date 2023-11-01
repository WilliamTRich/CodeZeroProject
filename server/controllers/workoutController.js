//Imports
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

//Models
const { Workout } = require('../models/workoutModel');

module.exports.getAllWorkouts = (req, res) => {
    Workout.find({ user: req.params.userId })
        .populate('user')
        .then(workouts => res.json(workouts))
        .catch(error => res.status(500).json({ error: error.message }));
};

module.exports.getWorkoutById = (req, res) => {
    Workout.findOne({ _id: req.params.workoutId, user: req.params.userId })
        .populate('user')
        .then(workout => {
            if (!workout) {
                return res.status(404).json({ error: 'Workout not found' });
            }
            res.json(workout);
        })
        .catch(error => res.status(500).json({ error: error.message }));
};

module.exports.createWorkout = (req, res) => {
    const workout = new Workout({ ...req.body, user: req.params.userId });
    workout.save()
        .then(savedWorkout => res.status(201).json(savedWorkout))
        .catch(error => res.status(400).json({ error: error.message }));
};

module.exports.updateWorkout = (req, res) => {
    Workout.findOneAndUpdate(
        { _id: req.params.workoutId, user: req.params.userId },
        req.body,
        { new: true }
    )
        .then(updatedWorkout => {
            if (!updatedWorkout) {
                return res.status(404).json({ error: 'Workout not found' });
            }
            res.json(updatedWorkout);
        })
        .catch(error => res.status(400).json({ error: error.message }));
};

module.exports.deleteWorkout = (req, res) => {
    Workout.findOneAndDelete({ _id: req.params.workoutId, user: req.params.userId })
        .then(deletedWorkout => {
            if (!deletedWorkout) {
                return res.status(404).json({ error: 'Workout not found' });
            }
            res.json({ message: 'Workout deleted successfully' });
        })
        .catch(error => res.status(500).json({ error: error.message }));
};