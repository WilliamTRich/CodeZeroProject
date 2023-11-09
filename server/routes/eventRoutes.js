const eventController = require('../controllers/eventController');

module.exports = (app) => {
    app.post('/api/events/:userId', eventController.createEvent);
    app.patch('/api/events/:userId/:eventId', eventController.updateEvent);
    app.delete('/api/events/:userId/:eventId', eventController.deleteEvent);
    app.get('/api/events/:userId', eventController.getAllEvents);
    app.get('/api/events/:userId/:eventId', eventController.getEventById);
};
