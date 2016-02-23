var express = require('express');
var router = express.Router();
var validator = require('../middleware/requestValidator');
var authorizer = require('../middleware/authorizer');
var userController = require('../controllers/usercontroller');

var userSchema = {
    type: 'object',
    properties: {
        name: { type: 'string', minLength: 10, optional: false },
        email: { type: 'string', pattern: 'email', optional: false },
        age: { type: 'number', optional: true },
        address: { type: 'string', optional: true },
        city: { type: 'string', optional: true },
        zip: { type: 'string', optional: true },
    }
};

// GET /api/users?page=0&pageSize=20&sort=+age
router.get('/', userController.findAll);

// GET /api/users/123
router.get('/:id', userController.findOne);

// PUT /api/users/123
router.put('/:id', authorizer, validator(userSchema), userController.update);

// POST /api/users
router.post('/', authorizer, validator(userSchema), userController.create);

// DELETE /api/users/12213
router.delete('/:id', authorizer, userController.delete);

module.exports = router;
