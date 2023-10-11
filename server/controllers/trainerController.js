const { model } = require('mongoose');
const { Trainer } = require('../models/trainerModel')
const { User } = require('../models/userModel')
// const { Calendar } = require('../models/caelndarModel')  // for later!!!! 
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
//note we will be switching to oauth and not jwt
//also the key needs to be changed to w/e key we have re: CHANGE_ME_KEY

//register new trainer with create method pulling from the request body
module.exports.registerTrainer=(req,res) => {
    Trainer.create(req.body)
    .then(trainer => {
        // const trainerToken =jwt.sign( //this will be changed/removed
        //     {id:trainer._id}, 
        //     process.env.CHANGE_ME_KEY); 
        res
            //making a cookie called trainerToken
            // .cookie("trainertoken", trainerToken, {httpOnly:true})
            //send info back to the trainer
            .json({ 
                msg: "success!", 
                trainer: trainer, //all trainer info in one
                id: trainer._id, //id separated
                firstName: trainer.firstName }); //first name seperated
    })
    .catch(err => {
        console.log("in err" + err)
        res.status(400).json(err);
    })
}

//login already created trainer
module.exports.loginTrainer = async (req,res) => {
    //check to see if an email already exists
    const trainer = await Trainer.findOne({email:req.body.email})

    //if not, send error code
    if (trainer === null) {
        return res.sendStatus(400)
    }

    //compare bcrypted forms of password entered and password stored for that trainer
    const correctPassword = await bcrypt.compare(req.body.password,trainer.password)

    //if password isnt correct, return error
    if(!correctPassword){
        return res.sendStatus(400)
    }
    //jwt WILL BE CHANGED
    const trainerToken = jwt.sign({id:trainer._id}, process.env.CHANGE_ME_KEY)

    res
        .cookie("trainertoken", trainerToken, {httpOnly:true}) //will be changed
        .json({msg: "success!", id:trainer._id, firstName:trainer.firstName})
}

//will need to change to oatuh format but this is logout 
module.exports.logoutTrainer = (req,res) => {
    res.clearCookie('trainertoken')
    res.sendStatus(200)
}

//get one trainer by id
//will need to change jwt!!!!!
module.exports.getTrainer = (req,res) => {
    const decodedJwt = jwt.decode(req.cookies.trainerToken, {complete:true})
    Trainer.findOne({_id: decodedJwt.payload.id})
        .then(oneTrainer => res.json(oneTrainer))
        .catch(err => res.status(500).json(err))
}

// get trainer info on a specific user ***** not sure where this should be either!!!! ****
module.exports.findUserAndTrainerById = async (req, res) => {
    const userId = req.params.userId; // if user id is passed as a URL parameter
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const trainer = await Trainer.findById(user.trainerId);
        if (!trainer) {
            return res.status(404).json({ message: 'Trainer not found' });
        }
        res.json({ user, trainer });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};


//get all trainers
module.exports.findAllTrainers = (req, res) => {
    Trainer.find()
        .then((trainers) => {
            res.json(trainers)
        })
        .catch((err) => {
            res.json({ message: 'Something went all wrong', error: err })
        });
}

// find one specific trainer
module.exports.findOneTrainer = (req, res) => {
    Trainer.findOne({ trainerName: req.params.trainerName })
        .then(trainer => {
            res.json({ trainer })
        })
        .catch((err) => {
            res.json({ message: 'Something went one wrong', error: err })
        });
}


// ************* update and delete trainers... not sure if we are adding this abiility!!! *****
// module.exports.updateOne = (req, res) => {
//     Trainer.findOneAndUpdate(
//         { _id: req.params.id },
//         req.body,
//         { new: true, runValidators: true }
//     )
//         .then(updatedTrainer => {
//             res.json({trainer: updatedTrainer})
//         })
//         .catch((err) => {
//             res.status(400).json(err)
//         });
// }

// module.exports.deleteOne = (req, res)=> {
//     Trainer.deleteOne({ _id: req.params.id })
//     .then(result => {
//         res.json({ result: result })
//     })
//     .catch((err) => {
//         res.json({ message: 'Something went  wrong', error: err })
//     });
// }
