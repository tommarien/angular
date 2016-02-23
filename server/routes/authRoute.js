var express = require('express');
var userRepository = require('../data/userRepository');
var securityService = require('../services/securityService');
var HttpError = require("../httpError.js");

var router = express.Router();

router.post('/login', function(req, res, next)  {

    var email = req.body.email;
    var password = req.body.password;
    userRepository.findOne({ 'email': email })
        .then(user => {
            // user not found
            if (!user || password !== '12345') {
                throw new HttpError(401);
            }

            var token = securityService.createToken(user);
            res.json({
                "accessToken": token,
                "tokenType": "bearer"
            });

        })
        .catch(function(err) {
            next(err);
        });
});

module.exports = router;
