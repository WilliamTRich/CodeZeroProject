const { model } = require('mongoose');
const { User } = require('../models/userModel')
// const { Trainer } = require('../models/trainerModel')
// const { Calendar } = require('../models/caelndarModel')  // for later!!!! 
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
//note we will be switching to oauth and not jwt
//also the key needs to be changed to w/e key we have re: CHANGE_ME_KEY

//register new user with create method pulling from the request body
module.exports.registerUser=(req,res) => {
    User.create(req.body)
    .then(user => {
        const userToken =jwt.sign( //this will be changed/removed
            {id:user._id}, 
            process.env.CHANGE_ME_KEY); 
        res
            //making a cookie called userToken
            .cookie("usertoken", userToken, {httpOnly:true})
            //send info back to the user
            .json({ 
                msg: "success!", 
                user: user, //all user info in one
                id: user._id, //id separated
                firstName: user.firstName }); //first name seperated
    })
    .catch(err => {
        console.log("in err" + err)
        res.status(400).json(err);
    })
}

//login already created user
module.exports.loginUser = async (req,res) => {
    //check to see if an email already exists
    const user = await User.findOne({email:req.body.email})
    //if not, send error code
    if (user === null) {
        return res.sendStatus(400)
    }
    //compare bcrypted forms of password entered and password stored for that user
    const correctPassword = await bcrypt.compare(req.body.password,user.password)
    //if password isnt correct, return error
    if(!correctPassword){
        return res.sendStatus(400)
    }
    //jwt WILL BE CHANGED
    const userToken = jwt.sign({id:user._id}, process.env.CHANGE_ME_KEY)
    res
        .cookie("usertoken", userToken, {httpOnly:true}) //will be changed
        .json({msg: "success!", id:user._id, firstName:user.firstName})
}

//will need to change to oatuh format but this is logout 
module.exports.logoutUser = (req,res) => {
    res.clearCookie('usertoken')
    res.sendStatus(200)
}

//get one user by id
//will need to change jwt!!!!!
module.exports.getUser = (req,res) => {
    const decodedJwt = jwt.decode(req.cookies.userToken, {complete:true})
    User.findOne({_id: decodedJwt.payload.id})
        .then(oneUser => res.json(oneUser))
        .catch(err => res.status(500).json(err))
}

//get all users by a trainers id *********************************** not sure if this should be in trainerController or maybe an associations controller????? 
module.exports.findUsersByTrainerId = (req, res) => {
    const trainerId = req.params.trainerId; // if trainerId is passed as a URL parameter
    Client.find({ trainerId: trainerId })
        .then((users) => {
            res.json(users);
        })
        .catch((err) => {
            res.status(500).json({ message: 'Internal Server Error', error: err });
        });
};

//get all users
module.exports.findAllUsers = (req, res) => {
    User.find()
        .then((users) => {
            res.json(users)
        })
        .catch((err) => {
            res.json({ message: 'Something went all wrong', error: err })
        });
}

// find one specific user
module.exports.findOneUser = (req, res) => {
    User.findOne({ userName: req.params.userName })
        .then(user => {
            res.json({ user })
        })
        .catch((err) => {
            res.json({ message: 'Something went one wrong', error: err })
        });
}


// ************* updayte and delete users... not sure if we are adding this abiility!!! *****
// module.exports.updateOne = (req, res) => {
//     User.findOneAndUpdate(
//         { _id: req.params.id },
//         req.body,
//         { new: true, runValidators: true }
//     )
//         .then(updatedUser => {
//             res.json({user: updatedUser})
//         })
//         .catch((err) => {
//             res.status(400).json(err)
//         });
// }

// module.exports.deleteOne = (req, res)=> {
//     User.deleteOne({ _id: req.params.id })
//     .then(result => {
//         res.json({ result: result })
//     })
//     .catch((err) => {
//         res.json({ message: 'Something went  wrong', error: err })
//     });
// }
