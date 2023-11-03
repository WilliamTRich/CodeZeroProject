const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema({
    workoutTitle: {
        type: String,
        required: true
    },
    workoutDate: {
        type: Date,
        required: true
    },
    workoutTime: {
        type: String,
        required: true
    },
    live: {
        type: Boolean,
        default: false
    },
    selfLed: {
        type: Boolean,
        default: false
    },
    notes: String,
    client: { //optional connect to client
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'
    },
    trainer: { //optional connect to trainer
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Trainer'
    }
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;
