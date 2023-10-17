//Imports
const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        minlength: [2, "First name must be at least 2 characters long"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        minlength: [2, "Last name must be at least 2 characters long"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        minlength: [3, "Email must be at least 3 characters long"],
        unique: true //uses mongoose unique validator plugin to ensure email is unique
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be at least 8 characters long"]
    },

    //this might work for a connection between trainers and users
    // trainerId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Trainer',
    //     required: true },

    //will probably need to add calendar associations here
}, { timestamps: true });


// before the user is saved, hash the password
UserSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});

//export the user
module.exports.User = mongoose.model("User", UserSchema);