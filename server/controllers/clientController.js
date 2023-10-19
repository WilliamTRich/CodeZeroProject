//Imports
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

//Models
const { Client } = require('../models/clientModel');

module.exports.registerClient = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    const clientExist = await Client.findOne({ email }).catch((e) =>
        console.log(e),
    );

    if (clientExist) {
        return res.status(400).json(['Email already in use.']);
    } else {
        await Client.create({
            firstName,
            lastName,
            email,
            password,
        })
            .then((client) => {
                const accessToken = jwt.sign(
                    {
                        clientId: client._id,
                    },
                    process.env.JWT_SECRET,
                );

                res.set('X-Authorization', accessToken);
                res.status(201);
                return res.json(client);
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

//login already created client
module.exports.loginClient = async (req, res) => {
    const { email, password } = req.body;

    const client = await Client.findOne({ email });

    if (!client) return res.status(400).json(['Email does not exist.']);
    else {
        if (await bcrypt.compare(password, client.password)) {
            const accessToken = jwt.sign(
                {
                    clientId: client._id,
                },
                process.env.JWT_SECRET,
            );

            res.set('X-Authorization', accessToken);
            res.status(201);
            return res.json(client);
        } else {
            return res.status(400).json(['Password is incorrect.']);
        }
    }
};

module.exports.updateClient = async (req, res) => {
    const accessToken = req.header('X-Authorization');
    if (!accessToken)
        return res.status(400).json(['You are unauthorized. Null.']);
    const clientId = req.params.id;
    if (clientId.length !== 24)
        return res.status(400).json(['Client ID is not a valid length.']);

    await jwt.verify(
        accessToken,
        process.env.JWT_SECRET,
        async (err, decoded) => {
            if (err) {
                console.log(err);
                return res.status(400).json(['You are unauthorized.']);
            } else {
                await Client.findOne({ _id: clientId }).catch(() => {
                    return res.status(400).json(['Client ID does not exist.']);
                });

                if (decoded.clientId !== clientId) {
                    return res.status(400).json(['You are unauthorized.']);
                } else {
                    const changes = { ...req.body };
                    await Client.findOneAndUpdate({ _id: clientId }, changes, {
                        new: true,
                        runValidators: true,
                    })
                        .then((client) => {
                            return res.status(201).json(client);
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

module.exports.deleteClient = async (req, res) => {
    const accessToken = req.header('X-Authorization');
    if (!accessToken)
        return res.status(400).json(['You are unauthorized. Null.']);
    const clientId = req.params.id;
    if (clientId.length !== 24)
        return res.status(400).json(['Client ID is not a valid length.']);

    await jwt.verify(
        accessToken,
        process.env.JWT_SECRET,
        async (err, decoded) => {
            if (err) {
                console.log(err);
                return res.status(400).json(['You are unauthorized.']);
            } else {
                await Client.findOne({ _id: clientId }).catch(() => {
                    return res.status(400).json(['Client ID does not exist.']);
                });

                if (decoded.clientId !== clientId) {
                    return res.status(400).json(['You are unauthorized.']);
                } else {
                    await Client.findOneAndDelete({ _id: clientId })
                        .then(() => {
                            return res
                                .status(201)
                                .json(['Client has been deleted']);
                        })
                        .catch((e) => {
                            console.log(e);
                            return res
                                .status(500)
                                .json(['Client has failed to be deleted.']);
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
        else return res.status(201).json(decoded.clientId);
    });
};

module.exports.getClients = async (req, res) => {
    const clients = await Client.find({});

    if (!clients) {
        return res.status(204).json(['There are no clients.']);
    } else {
        return res.status(201).json(clients);
    }
};

module.exports.getClient = async (req, res) => {
    const clientId = req.params.id;
    if (clientId.length !== 24) {
        return res.status(400).json(['Client ID is not a valid length.']);
    } else {
        await Client.findOne({ _id: clientId })
            .then((client) => {
                return res.status(201).json(client);
            })
            .catch((e) => {
                return res.status(400).json(['Client ID does not exist.']);
            });
    }
};
