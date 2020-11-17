const User = require('../database/models/user.js');

// verify if user name or email is already exist 
verifySignUp = (req, res, next) => {
    User.findOne({
        where: {
            firstName: req.body.firstName
        }
    }).then((user) => {
        if (user) {
            res.status(400).send({
                message: "Failed! Username is already in use!"
            })
            return;
        }


        User.findOne({
            where: {
                email: req.body.email
            }
        }).then((user) => {
            if (user) {
                res.status(400).send({
                    message: "Failed! Email is already in use!"
                })
                return;
            }

            next();
        })
    })
}

module.exports = verifySignUp