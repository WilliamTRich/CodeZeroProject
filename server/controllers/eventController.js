//Imports
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

require('dotenv').config();

//Models
const Event = require('../models/eventModel');

module.exports.getAllEvents = (req, res) => {
    const userId = req.params.userId;
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ message: 'Invalid user ID' });
    }
    Event.find({
        $or: [{ client: userId }, { trainer: userId }],
    })
        .populate({
            path: 'user',
            options: { strictPopulate: false },
        })
        .then((events) => {
            if (events.length > 0) {
                res.json(events);
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


module.exports.getEventById = (req, res) => {
    const { userId, eventId } = req.params;
    Event.findOne({
        _id: eventId,
        $or: [{ client: userId }, { trainer: userId }],
    })
        .populate({
            path: 'user',
            options: { strictPopulate: false },
        })
        .then((event) => {
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
        {
            _id: req.params.eventId,
            $or: [
                { client: req.params.userId },
                { trainer: req.params.userId },
            ],
        },
        req.body,
        { new: true },
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
    const { userId, eventId } = req.params;

    Event.findOneAndDelete({
        _id: eventId,
        $or: [{ client: userId }, { trainer: userId }],
    })
    .populate({
        path: 'user',
        options: { strictPopulate: false },
    })
    .then((deletedEvent) => {
        if (!deletedEvent) {
            return res.status(404).json({ error: 'Event not found' });
        }
        res.json({ message: 'Event deleted successfully' });
    })
        .catch(error => res.status(500).json({ error: error.message }));
};