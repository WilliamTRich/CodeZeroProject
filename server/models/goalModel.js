const mongoose = require('mongoose');

const GoalSchema = new mongoose.Schema({
    goalTitle: {
        type: String,
        required: true
    },
    goalEndDate: {
        type: Date,
        required: true
    },
    goalSteps: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'
    },
    trainer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Trainer'
    }
});

const Goal = mongoose.model('Goal', GoalSchema);

module.exports = Goal;
