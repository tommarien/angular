var HttpError = require("../httpError.js");
var config = require("../config");

module.exports = function authorizer(req, res, next) {
    if (req.user || config.disableSecurity) {
        next();
        return;
    }

    next(new HttpError(401));
}
