//Imports
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

//Models
const { User } = require('../models/userModel');

module.exports.registerUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    const userExist = await User.findOne({ email }).catch((e) =>
        console.log(e),
    );

    if (userExist) {
        return res.status(400).json(['Email already in use.']);
    } else {
        await User.create({
            firstName,
            lastName,
            email,
            password,
        })
            .then((user) => {
                const accessToken = jwt.sign(
                    {
                        userId: user._id,
                    },
                    process.env.JWT_SECRET,
                );

                res.set('X-Authorization', accessToken);
                res.status(201);
                return res.json(user);
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

//login already created user
module.exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) return res.status(400).json(['Email does not exist.']);
    else {
        if (await bcrypt.compare(password, user.password)) {
            const accessToken = jwt.sign(
                {
                    userId: user._id,
                },
                process.env.JWT_SECRET,
            );

            res.set('X-Authorization', accessToken);
            res.status(201);
            return res.json(user);
        } else {
            return res.status(400).json(['Password is incorrect.']);
        }
    }
};

module.exports.updateUser = async (req, res) => {
    const accessToken = req.header('X-Authorization');
    if (!accessToken || accessToken.length !== 153)
        return res.status(400).json(['You are unauthorized. Null.']);
    const userId = req.params.id;
    if (userId.length !== 24)
        return res.status(400).json(['User ID is not a valid length.']);

    await jwt.verify(
        accessToken,
        process.env.JWT_SECRET,
        async (err, decoded) => {
            if (err) {
                console.log(err);
                return res.status(400).json(['You are unauthorized.']);
            } else {
                await User.findOne({ _id: userId }).catch(() => {
                    return res.status(400).json(['User ID does not exist.']);
                });

                if (decoded.userId !== userId) {
                    return res.status(400).json(['You are unauthorized.']);
                } else {
                    const changes = { ...req.body };
                    await User.findOneAndUpdate({ _id: userId }, changes, {
                        new: true,
                        runValidators: true,
                    })
                        .then((user) => {
                            return res.status(201).json(user);
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

module.exports.deleteUser = async (req, res) => {
    const accessToken = req.header('X-Authorization');
    if (!accessToken || accessToken.length !== 153)
        return res.status(400).json(['You are unauthorized. Null.']);
    const userId = req.params.id;
    if (userId.length !== 24)
        return res.status(400).json(['User ID is not a valid length.']);

    await jwt.verify(
        accessToken,
        process.env.JWT_SECRET,
        async (err, decoded) => {
            if (err) {
                console.log(err);
                return res.status(400).json(['You are unauthorized.']);
            } else {
                await User.findOne({ _id: userId }).catch(() => {
                    return res.status(400).json(['User ID does not exist.']);
                });

                if (decoded.userId !== userId) {
                    return res.status(400).json(['You are unauthorized.']);
                } else {
                    await User.findOneAndDelete({ _id: userId })
                        .then(() => {
                            return res
                                .status(201)
                                .json(['User has been deleted']);
                        })
                        .catch((e) => {
                            console.log(e);
                            return res
                                .status(500)
                                .json(['User has failed to be deleted.']);
                        });
                }
            }
        },
    );
};

module.exports.validateUser = async (req, res) => {
    const accessToken = req.header('X-Authorization');
    if (!accessToken || accessToken.length !== 153)
        return res.status(400).json(['You are unauthorized.']);
    await jwt.verify(accessToken, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(400).json(['You are not authorized.']);
        else return res.status(201).json(decoded.userId);
    });
};

module.exports.getUsers = async (req, res) => {
    const users = await User.find({});

    if (!users) {
        return res.status(204).json(['There are no users.']);
    } else {
        return res.status(201).json(users);
    }
};

module.exports.getUser = async (req, res) => {
    const userId = req.params.id;
    if (userId.length !== 24) {
        return res.status(400).json(['User ID is not a valid length.']);
    } else {
        await User.findOne({ _id: userId })
            .then((user) => {
                return res.status(201).json(user);
            })
            .catch((e) => {
                return res.status(400).json(['User ID does not exist.']);
            });
    }
};
