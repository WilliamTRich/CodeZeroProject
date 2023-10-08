const { model } = require('sequelize');
//change trainer to what make sence for your project 17 times on this page
const { Trainer } = require('../models/trainerModel')

//test route
module.exports.index = (req, res) => {
    res.json({
        message: "Hello from trainers"
    })
}

//create one
module.exports.create = (req,res)=> {
    Trainer.create(req.body)
    .then(trainer => res.json(trainer))
    .catch(err => res.status(400).json(err))
}

//find all
module.exports.findAll = (req, res) => {
    Trainer.find()
        .then((trainers) => {
            res.json(trainers)
        })
        .catch((err) => {
            res.json({ message: 'Something went all wrong', error: err })
        });
}

//find one
module.exports.findOne = (req, res) => {
    Trainer.findOne({ _id: req.params.id })
        .then(trainer => {
            res.json({ trainer })
        })
        .catch((err) => {
            res.json({ message: 'Something went one wrong', error: err })
        });
}

//update one
module.exports.updateOne = (req, res) => {
    Trainer.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedTrainer => {
            res.json({trainer: updatedTrainer})
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}

//delete one
module.exports.deleteOne = (req, res)=> {
    Trainer.deleteOne({ _id: req.params.id })
    .then(result => {
        res.json({ result: result })
    })
    .catch((err) => {
        res.json({ message: 'Something went  wrong', error: err })
    });
}