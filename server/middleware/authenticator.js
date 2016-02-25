var securityService = require('../services/securityService.js');
var HttpError = require('../httpError');

module.exports = function authHandler(req, res, next) {

    console.log(req.headers.authorization)
    if (!req.headers.authorization) {
        // no header
        next();
        return;
    }

    var authArr = req.headers.authorization.split(' ');

    try {
        var payload = securityService.decodeToken(authArr[1]);
        req.user = {
            id: payload.sub,
            name: payload.name,
            role: payload.role || 'user'
        }
        return next();
    }
    catch (err) {
        next(new HttpError(401));
    }
}
