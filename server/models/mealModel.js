const mongoose = require('mongoose');

const MealSchema = new mongoose.Schema({
    mealTitle: {
        type: String,
        required: true
    },
    mealTime: {
        type: String, // can change to time if we want
        required: true
    },
    ingredients: {
        type: [String],
        required: true
    },
    instructions: {
        type: String,
        required: true
    },
    calories: {
        type: String,
        required: true
    },
    notes: String,
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'
    },
    trainer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Trainer'
    }
});

const Meal = mongoose.model('Meal', MealSchema);

module.exports = Meal;
