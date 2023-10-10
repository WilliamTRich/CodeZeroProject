//Imports
const db = require('../models')
const { jwt } = require('express-jwt')
require('dotenv').config()

const UserModel = db.users
const Op = db.Sequelize.Op
//Create User
module.exports.createUser = async (req, res) => {
    const{ email, password } = req.body
    console.log("Here 1")
    try {
        const userExist = false

        if(userExist) {
            return res
                .status(400)
                .json({ message: "Email is already in use."})
        } else {
            console.log("Here 2")
            UserModel.create({
                email: email,
                password: password
            })
                .then(userRes => {
                    console.log("Here 3")
                    const user = {
                        userId: userRes.id,
                        email: userRes.email
                    }
                    console.log("Here 4")
                    //const accessToken = jwt.sign(user, process.env.JWT_SECRET)
                    return res.json({
                        userId: user.id,
                        email: user.email
                    })
                })
                .catch(e => console.log(e))
        }
    } catch(e) {
        console.log(e)
    }
}

/*//test route
module.exports.index = (req, res) => {
    res.json({
        message: "Hello from users"
    })
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
}*/

