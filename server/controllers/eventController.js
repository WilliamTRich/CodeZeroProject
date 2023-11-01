//Imports
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

//Models
const { Event } = require('../models/eventModel');

module.exports.getAllEvents = (req, res) => {
    Event.find({ user: req.params.userId })
        .populate('user')
        .then(events => res.json(events))
        .catch(error => res.status(500).json({ error: error.message }));
};

module.exports.getEventById = (req, res) => {
    Event.findOne({ _id: req.params.eventId, user: req.params.userId })
        .populate('user')
        .then(event => {
            if (!event) {
                return res.status(404).json({ error: 'Event not found' });
            }
            res.json(event);
        })
        .catch(error => res.status(500).json({ error: error.message }));
};

module.exports.createEvent = (req, res) => {
    const event = new Event({ ...req.body, user: req.params.userId });
    event.save()
        .then(savedEvent => res.status(201).json(savedEvent))
        .catch(error => res.status(400).json({ error: error.message }));
};

module.exports.updateEvent = (req, res) => {
    Event.findOneAndUpdate(
        { _id: req.params.eventId, user: req.params.userId },
        req.body,
        { new: true }
    )
        .then(updatedEvent => {
            if (!updatedEvent) {
                return res.status(404).json({ error: 'Event not found' });
            }
            res.json(updatedEvent);
        })
        .catch(error => res.status(400).json({ error: error.message }));
};

module.exports.deleteEvent = (req, res) => {
    Event.findOneAndDelete({ _id: req.params.eventId, user: req.params.userId })
        .then(deletedEvent => {
            if (!deletedEvent) {
                return res.status(404).json({ error: 'Event not found' });
            }
            res.json({ message: 'Event deleted successfully' });
        })
        .catch(error => res.status(500).json({ error: error.message }));
};