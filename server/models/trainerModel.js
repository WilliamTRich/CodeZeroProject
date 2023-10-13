const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const uniqueValidator = require('mongoose-unique-validator');

const TrainerSchema = new mongoose.Schema({
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
        minlength: [8, "Pasword must be at least 8 characters long"]
    }
    //will probably need to add calendar assocaitionns here 
}, { timestamps: true });




// validating the password and confirm password match before saving to the db
TrainerSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword)
    .set(value => this._confirmPassword = value);

TrainerSchema.pre('validate', function (next) {
    if (this.password !== this.confirmPassword) {
        console.log(this.password)
        console.log(this.confirmPassword)
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
});


// before the Trainer is saved, hash the password
TrainerSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});

//plugin to check if the email is unique and not used already in db
TrainerSchema.plugin( uniqueValidator);


//export the Trainer 
module.exports.Trainer = mongoose.model("Trainer", TrainerSchema);
