import User from './userModel.js';
import Trainer from './trainerModel.js';

User.belongsTo(Trainer); // users can onlyhave one trainer
Trainer.hasMany(User);   // A trainer can have multiple users

export { User, Trainer };
