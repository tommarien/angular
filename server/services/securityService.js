"use strict"

var sha256 = require('sha256');
var base64 = require('base-64');
var jwt = require('jwt-simple');
var config = require('../config');
var srs = require('secure-random-string');

class SecurityService {

    createToken(user) {
        var payload = {
            "sub": user._id,
            "iis": "euri:bootcamp",
            "name": user.firstName + ' ' + user.lastName,
            "role": user.role
        }
        return jwt.encode(payload, config.tokenSecret);
    }

    decodeToken(token) {
        return jwt.decode(token, config.tokenSecret);
    }

    encryptKey(apiKey) {
        return base64.encode(sha256(apiKey));
    }

    // helpers methods
    generateApiKey() {
        return 'API_' + srs();
    }
}

module.exports = new SecurityService();
