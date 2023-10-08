const { model } = require('sequelize');
//change user to what make sence for your project 17 times on this page
const { User } = require('../models/userModel')

//test route
module.exports.index = (req, res) => {
    res.json({
        message: "Hello from users"
    })
}

//create one
module.exports.create = (req,res)=> {
    User.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.status(400).json(err))
}

//find all
module.exports.findAll = (req, res) => {
    User.find()
        .then((users) => {
            res.json(users)
        })
        .catch((err) => {
            res.json({ message: 'Something went all wrong', error: err })
        });
}

//find one
module.exports.findOne = (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(user => {
            res.json({ user })
        })
        .catch((err) => {
            res.json({ message: 'Something went one wrong', error: err })
        });
}

//update one
module.exports.updateOne = (req, res) => {
    User.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedUser => {
            res.json({user: updatedUser})
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}

//delete one
module.exports.deleteOne = (req, res)=> {
    User.deleteOne({ _id: req.params.id })
    .then(result => {
        res.json({ result: result })
    })
    .catch((err) => {
        res.json({ message: 'Something went  wrong', error: err })
    });
}