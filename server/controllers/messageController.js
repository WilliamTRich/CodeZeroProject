//Imports
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

//Models
const { Message } = require('../models/messageModel');

module.exports.getAllMessages = (req, res) => {
    Message.find({ user: req.params.userId })
        .populate('user')
        .then(messages => res.json(messages))
        .catch(error => res.status(500).json({ error: error.message }));
};

module.exports.getMessageById = (req, res) => {
    Message.findOne({ _id: req.params.messageId, user: req.params.userId })
        .populate('user')
        .then(message => {
            if (!message) {
                return res.status(404).json({ error: 'Message not found' });
            }
            res.json(message);
        })
        .catch(error => res.status(500).json({ error: error.message }));
};

module.exports.createMessage = (req, res) => {
    const message = new Message({ ...req.body, user: req.params.userId });
    message.save()
        .then(savedMessage => res.status(201).json(savedMessage))
        .catch(error => res.status(400).json({ error: error.message }));
};

module.exports.updateMessage = (req, res) => {
    Message.findOneAndUpdate(
        { _id: req.params.messageId, user: req.params.userId },
        req.body,
        { new: true }
    )
        .then(updatedMessage => {
            if (!updatedMessage) {
                return res.status(404).json({ error: 'Message not found' });
            }
            res.json(updatedMessage);
        })
        .catch(error => res.status(400).json({ error: error.message }));
};

module.exports.deleteMessage = (req, res) => {
    Message.findOneAndDelete({ _id: req.params.messageId, user: req.params.userId })
        .then(deletedMessage => {
            if (!deletedMessage) {
                return res.status(404).json({ error: 'Message not found' });
            }
            res.json({ message: 'Message deleted successfully' });
        })
        .catch(error => res.status(500).json({ error: error.message }));
};