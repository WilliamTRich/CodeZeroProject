//Imports
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

//Models
const { Trainer } = require('../models/trainerModel');

module.exports.registerTrainer = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    const trainerExist = await Trainer.findOne({ email }).catch((e) =>
        console.log(e),
    );

    if (trainerExist) {
        return res.status(400).json(['Email already in use.']);
    } else {
        await Trainer.create({
            firstName,
            lastName,
            email,
            password,
        })
            .then((trainer) => {
                const accessToken = jwt.sign(
                    {
                        trainerId: trainer._id,
                        userType: 'trainer',
                    },
                    process.env.JWT_SECRET,
                );

                res.set('X-Authorization', accessToken);
                res.status(201);
                return res.json(trainer);
            })
            .catch((e) => {
                let retArr = [];
                if ('errors' in e) {
                    for (const key in e.errors) {
                        retArr.push(e.errors[key].message);
                    }
                    return res.json(retArr);
                } else {
                    return res.status(500).json(e);
                }
            });
    }
};

//login already created trainer
module.exports.loginTrainer = async (req, res) => {
    const { email, password } = req.body;

    const trainer = await Trainer.findOne({ email });

    if (!trainer) return res.status(400).json(['Email does not exist.']);
    else {
        if (await bcrypt.compare(password, trainer.password)) {
            const accessToken = jwt.sign(
                {
                    trainerId: trainer._id,
                    userType: 'trainer',
                },
                process.env.JWT_SECRET,
            );

            res.set('X-Authorization', accessToken);
            res.status(201);
            return res.json(trainer);
        } else {
            return res.status(400).json(['Password is incorrect.']);
        }
    }
};


module.exports.updateTrainer = async (req, res) => {
    const accessToken = req.header('X-Authorization');
    if (!accessToken)
        return res.status(400).json(['You are unauthorized. Null.']);
    const trainerId = req.params.id;
    if (trainerId.length !== 24)
        return res.status(400).json(['Trainer ID is not a valid length.']);

    await jwt.verify(
        accessToken,
        process.env.JWT_SECRET,
        async (err, decoded) => {
            if (err) {
                console.log(err);
                return res.status(400).json(['You are unauthorized.']);
            } else {
                await Trainer.findOne({ _id: trainerId }).catch(() => {
                    return res.status(400).json(['Trainer ID does not exist.']);
                });

                if (decoded.trainerId !== trainerId) {
                    return res.status(400).json(['You are unauthorized.']);
                } else {
                    const changes = { ...req.body };
                    await Trainer.findOneAndUpdate(
                        { _id: trainerId },
                        changes,
                        {
                            new: true,
                            runValidators: true,
                        },
                    )
                        .then((trainer) => {
                            return res.status(201).json(trainer);
                        })
                        .catch((e) => {
                            let retArr = [];
                            if ('errors' in e) {
                                for (const key in e.errors) {
                                    retArr.push(e.errors[key].message);
                                }
                                return res.json(retArr);
                            } else {
                                return res.status(500).json(e);
                            }
                        });
                }
            }
        },
    );
};

module.exports.deleteTrainer = async (req, res) => {
    const accessToken = req.header('X-Authorization');
    if (!accessToken)
        return res.status(400).json(['You are unauthorized. Null.']);
    const trainerId = req.params.id;
    if (trainerId.length !== 24)
        return res.status(400).json(['Trainer ID is not a valid length.']);

    await jwt.verify(
        accessToken,
        process.env.JWT_SECRET,
        async (err, decoded) => {
            if (err) {
                console.log(err);
                return res.status(400).json(['You are unauthorized.']);
            } else {
                await Trainer.findOne({ _id: trainerId }).catch(() => {
                    return res.status(400).json(['Trainer ID does not exist.']);
                });

                if (decoded.trainerId !== trainerId) {
                    return res.status(400).json(['You are unauthorized.']);
                } else {
                    await Trainer.findOneAndDelete({ _id: trainerId })
                        .then(() => {
                            return res
                                .status(201)
                                .json(['Trainer has been deleted']);
                        })
                        .catch((e) => {
                            console.log(e);
                            return res
                                .status(500)
                                .json(['Trainer has failed to be deleted.']);
                        });
                }
            }
        },
    );
};

module.exports.getTrainers = async (req, res) => {
    const trainers = await Trainer.find({});

    if (!trainers) {
        return res.status(204).json(['There are no trainers.']);
    } else {
        return res.status(201).json(trainers);
    }
};

module.exports.getTrainer = async (req, res) => {
    const trainerId = req.params.id;
    if (trainerId.length !== 24) {
        return res.status(400).json(['Trainer ID is not a valid length.']);
    } else {
        await Trainer.findOne({ _id: trainerId })
            .then((trainer) => {
                return res.status(201).json(trainer);
            })
            .catch((e) => {
                return res.status(400).json(['Trainer ID does not exist.']);
            });
    }
};
