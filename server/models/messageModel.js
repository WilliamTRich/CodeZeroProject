const mongoose = require('mongoose');

const MessagesSchema = new mongoose.Schema({
    content: String, 
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Client" 
    },
    trainerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Trainer" 
    },
    timestamp: {
        type: Date,
        default: Date.now 
    }
});

module.exports.Message = mongoose.model("Message", MessagesSchema);
