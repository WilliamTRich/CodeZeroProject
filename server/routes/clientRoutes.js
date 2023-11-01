const clientController = require('../controllers/clientController');

module.exports = (app) => {
    app.post('/api/clients', clientController.registerClient);
    app.post('/api/clients/login', clientController.loginClient);
    app.patch('/api/clients/:id', clientController.updateClient);
    app.delete('/api/clients/:id', clientController.deleteClient);
    app.get('/api/clients', clientController.getClients);
    app.get('/api/clients/:id', clientController.getClient);

    //Global User Validation for Clients and Trainers
    app.get('/api/users/validate', clientController.validateUser);
};
