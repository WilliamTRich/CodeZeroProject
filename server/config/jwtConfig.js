//this whole file can go once we switch to oauth

const jwt = require('jsonwebtoken')

module.exports.authenticate = (req,res,next) => {
    jwt.verify(req.cookies.usertoken, process.env.CHANGE_ME_KEY, (err,payload) => {
        if (err) {
            res.status(401).json({verified:false})
        } else {
            next();
        }
    })
}    