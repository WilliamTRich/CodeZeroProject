const messageController = require('../controllers/messageController');

module.exports = (app) => {
    app.post('/api/messages', messageController.createMessage);
    app.patch('/api/messages/:id', messageController.updateMessage);
    app.delete('/api/messages/:id', messageController.deleteMessage);
    app.get('/api/messages', messageController.getAllMessages);
    app.get('/api/messages/:id', messageController.getMessageById);
};
