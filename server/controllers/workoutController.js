//Imports
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

require('dotenv').config();

//Models
const  Workout  = require('../models/workoutModel');

module.exports.getAllWorkouts = (req, res) => {
    const userId = req.params.userId;
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ message: 'Invalid user ID' });
    }
    Workout.find({
        $or: [{ client: userId }, { trainer: userId }],
    })
        .populate({
            path: 'user',
            options: { strictPopulate: false },
        })
        .then((workouts) => {
            if (workouts.length > 0) {
                res.json(workouts);
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

module.exports.getWorkoutById = (req, res) => {
    const { userId, workoutId } = req.params;
    Workout.findOne({
        _id: workoutId,
        $or: [{ client: userId }, { trainer: userId }],
    })
        .populate({
            path: 'user',
            options: { strictPopulate: false },
        })
        .then((workout) => {
            if (!workout) {
                return res.status(404).json({ error: 'Workout not found' });
            }
            res.json(workout);
        })
        .catch((error) => res.status(500).json({ error: error.message }));
};

module.exports.createWorkout = (req, res) => {
    const workout = new Workout({ ...req.body, user: req.params.userId });
    workout
        .save()
        .then((savedWorkout) => res.status(201).json(savedWorkout))
        .catch((error) => res.status(400).json({ error: error.message }));
};

module.exports.updateWorkout = (req, res) => {
    Workout.findOneAndUpdate(
        {
            _id: req.params.workoutId,
            $or: [
                { client: req.params.userId },
                { trainer: req.params.userId },
            ],
        },
        req.body,
        { new: true },
    )
        .then((updatedWorkout) => {
            if (!updatedWorkout) {
                return res.status(404).json({ error: 'Workout not found' });
            }
            res.json(updatedWorkout);
        })
        .catch((error) => res.status(400).json({ error: error.message }));
};

module.exports.deleteWorkout = (req, res) => {
    const { userId, workoutId } = req.params;

    Workout.findOneAndDelete({
        _id: workoutId,
        $or: [{ client: userId }, { trainer: userId }],
    })
        .populate({
            path: 'user',
            options: { strictPopulate: false },
        })
        .then((deletedWorkout) => {
            if (!deletedWorkout) {
                return res.status(404).json({ error: 'Workout not found' });
            }
            res.json({ message: 'Workout deleted successfully' });
        })
        .catch((error) => res.status(500).json({ error: error.message }));
};
