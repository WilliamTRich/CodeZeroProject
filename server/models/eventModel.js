const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    location: String,
    start: {
        type: Date,
        required: true,
    },
    end: {
        type: Date,
        required: true,
    },
    allDay: {
        type: Boolean,
        default: false,
    },
    timezone: {
        type: String,
        required: true,
    },
    repeat: {
        type: String,
        enum: ['Never', 'Daily', 'Weekly', 'Monthly', 'Yearly'],
        default: 'Never',
    },
    description: String,
});

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;
