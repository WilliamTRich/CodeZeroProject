// this file could be just added to the others instead of being sep.


const { model } = require('mongoose');
const { Trainer } = require('../models/trainerModel')
const { User } = require('../models/userModel')
// const { Calendar } = require('../models/caelndarModel')  // for later!!!! 
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


// get trainer info on a specific user ***** not sure where this should be either!!!! ****
module.exports.findUserAndTrainerById = async (req, res) => {
    const userId = req.params.userId; // if user id is passed as a URL parameter
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const trainer = await Trainer.findById(user.trainerId);
        if (!trainer) {
            return res.status(404).json({ message: 'Trainer not found' });
        }
        res.json({ user, trainer });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};


//get all users by a trainers id *********************************** not sure if this should be in trainerController or maybe an associations controller????? 
module.exports.findUsersByTrainerId = (req, res) => {
    const trainerId = req.params.trainerId; // if trainerId is passed as a URL parameter
    Client.find({ trainerId: trainerId })
        .then((users) => {
            res.json(users);
        })
        .catch((err) => {
            res.status(500).json({ message: 'Internal Server Error', error: err });
        });
};