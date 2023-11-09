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
    eventSubject:{
        type: String,
        enum:['Workout', 'Meal Time', 'Work', 'Meeting', 'Traveling', 'Rest Day', 'Game',
        'Party', 'Anniversary', 'Birthday', 'Grocery Shopping', 'Yoga/Meditation', 'Goal Date',
        'Deadlines', 'Personal', 'Doctors/Health', 'School Event', 'School/Education', 'Community Event', 'Volunteering',
        'To Do', 'Vacation', 'Other'],
        default: 'Other',
    },
    description: {String,
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

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;
